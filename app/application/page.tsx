"use client";

import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, ChevronDown } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

// --- Types ---

type FormInputs = {
    // Step 1: Basic Info
    fullName: string;
    email: string;
    whatsapp: string;
    age: number;
    isSebraeStudent: "sim" | "nao";
    sebraeClass?: string; // If sim
    institutionName?: string; // If nao

    // Step 2: About
    whyChooseYou: string;
    contribution: string;
    mainValue: string;
    learningExpectations: string;

    // Step 3: Discovery & Terms
    discoveryChannel: string[];
    discoveryOther?: string; // If outro
    termsAccepted: boolean;
};

// --- Constants ---

const SEBRAE_CLASSES = [
    "1A", "1B", "1C", "1D", "1E", "1F",
    "2A", "2B", "2C", "2D", "2E", "2F",
    "3A", "3B", "3C", "3D", "3E", "3F"
];

const DISCOVERY_OPTIONS = [
    { value: "indicacao", label: "Indicação de Amigo" },
    { value: "instagram", label: "Instagram" },
    { value: "sebrae", label: "Divulgação Sebrae" },
    { value: "linkedin", label: "LinkedIn" },
    { value: "google", label: "Google / Pesquisa" },
    { value: "outro", label: "Outro" },
];

// --- Google Forms Submission ---

const submitToGoogleForms = async (formData: FormInputs) => {
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfKa2IwuQn4xCCK4yTAja_8UxPKuBZ45k9xfzrXxSJ7nDXocw/formResponse";

    // Create FormData with correct entry IDs
    const payload = new URLSearchParams();

    // Basic fields (always sent)
    payload.append("entry.658055895", formData.fullName); // Nome
    payload.append("entry.249087095", formData.email); // Email
    payload.append("entry.57798074", formData.whatsapp); // Telefone
    payload.append("entry.298884198", formData.age.toString()); // Idade
    payload.append("entry.1290764352", formData.isSebraeStudent === "sim" ? "Sim" : "Não"); // Sebrae

    // Conditional fields based on Sebrae answer
    if (formData.isSebraeStudent === "sim" && formData.sebraeClass) {
        payload.append("entry.1333145369", formData.sebraeClass); // Turma
    }
    if (formData.isSebraeStudent === "nao" && formData.institutionName) {
        payload.append("entry.2120857853", formData.institutionName); // Instituição
    }

    // Step 2 fields (textareas)
    payload.append("entry.888028728", formData.whyChooseYou); // Por que escolhido
    payload.append("entry.1215645219", formData.contribution); // Contribuição
    payload.append("entry.1383876683", formData.mainValue); // Valor principal
    payload.append("entry.1149221184", formData.learningExpectations); // O que espera aprender

    // Step 3 fields - "Como descobriu"
    // Discovery Channel (Loop for multiple values)
    const discoveryLabels: Record<string, string> = {
        indicacao: "Indicação de amigo",
        instagram: "Instagram",
        sebrae: "Escola do Sebrae",
        linkedin: "LinkedIn",
        google: "Google",
        outro: "Outro"
    };

    formData.discoveryChannel.forEach((channel) => {
        if (channel === "outro") {
            // Send marker and the text response
            payload.append("entry.1241513166", "__other_option__");
            if (formData.discoveryOther) {
                payload.append("entry.1241513166.other_option_response", formData.discoveryOther);
            }
        } else {
            // Send standard mapped value
            const valueToSend = discoveryLabels[channel] || channel;
            payload.append("entry.1241513166", valueToSend);
        }
    });

    // Terms acceptance (always "Sim, aceito")
    payload.append("entry.926149235", "Sim, aceito");

    try {
        // Google Forms requires no-cors mode
        await fetch(GOOGLE_FORM_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: payload.toString(),
        });

        // no-cors means we can't read response, but if no error = success
        return { success: true };
    } catch (error) {
        console.error("Form submission error:", error);
        return { success: false, error };
    }
};

// --- Components ---

function StepIndicator({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-cf-white/90 backdrop-blur-sm border-b border-cf-lines py-4 px-6 md:px-12 flex justify-between items-center">
            <Link href="/" className="font-serif text-xl font-bold tracking-tighter hover:opacity-50 transition-opacity">
                CF.CLUB
            </Link>
            <span className="font-mono text-xs tracking-[0.2em] font-medium">
                STEP {currentStep}/{totalSteps}
            </span>
        </div>
    );
}


// --- Main Page ---
import { useRouter } from "next/navigation";

export default function ApplicationPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [termsLinkOpened, setTermsLinkOpened] = useState(false);
    const TOTAL_STEPS = 3;

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors, isValid },
        trigger
    } = useForm<FormInputs>({
        mode: "onChange",
        defaultValues: {
            isSebraeStudent: "sim", // Default
            discoveryChannel: [], // Default empty array
        }
    });

    const isSebraeStudent = watch("isSebraeStudent");
    const discoveryChannel = watch("discoveryChannel");

    // --- LocalStorage Logic ---
    useEffect(() => {
        // Load data on mount
        const savedData = localStorage.getItem("cfclub_application");
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                reset(parsed);
            } catch (e) {
                console.error("Failed to load saved form data", e);
            }
        }
    }, [reset]);

    useEffect(() => {
        // Save data on change
        const subscription = watch((value) => {
            localStorage.setItem("cfclub_application", JSON.stringify(value));
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    // Mask for WhatsApp
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 11) value = value.slice(0, 11);

        // (00) 00000-0000
        if (value.length > 2) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        }
        if (value.length > 9) { // (00) 00000
            value = `${value.slice(0, 9)}-${value.slice(9)}`;
        }

        setValue("whatsapp", value, { shouldValidate: true });
    };

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        setIsLoading(true);
        try {
            const result = await submitToGoogleForms(data);

            if (result.success) {
                // Clear saved progress
                localStorage.removeItem("cfclub_application");

                // Redirect to success page
                const nome = encodeURIComponent(data.fullName);
                const email = encodeURIComponent(data.email);
                router.push(`/obrigado?nome=${nome}&email=${email}`);
            } else {
                throw new Error("Submission failed");
            }
        } catch (error) {
            alert("Erro ao enviar. Por favor, tente novamente.");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleTermsLinkClick = () => {
        setTermsLinkOpened(true);
    };

    const nextStep = async () => {
        let valid = false;
        if (step === 1) {
            valid = await trigger(["fullName", "email", "whatsapp", "age", "isSebraeStudent", "sebraeClass", "institutionName"]);
        } else if (step === 2) {
            valid = await trigger(["whyChooseYou", "contribution", "mainValue", "learningExpectations"]);
        }

        if (valid) {
            setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const prevStep = () => {
        setStep((prev) => Math.max(prev - 1, 1));
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <main className="min-h-screen bg-cf-white text-cf-black font-sans selection:bg-black selection:text-white pt-32 pb-20 px-6">

            <StepIndicator currentStep={step} totalSteps={TOTAL_STEPS} />

            <div className="max-w-3xl mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">

                    <AnimatePresence mode="wait">

                        {/* --- STEP 1: INFORMAÇÕES BÁSICAS --- */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-16"
                            >
                                <div className="space-y-2">
                                    <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">Quem é você?</h2>
                                    <p className="font-mono text-xs text-cf-dim tracking-widest uppercase">Informações Básicas</p>
                                </div>

                                {/* Nome */}
                                <div className="space-y-4">
                                    <label className="block text-xl md:text-2xl font-semibold tracking-tight">
                                        1. Qual seu nome completo?
                                    </label>
                                    <input
                                        {...register("fullName", { required: "Nome é obrigatório" })}
                                        type="text"
                                        placeholder="Seu nome"
                                        className="w-full bg-transparent border-b border-cf-lines py-4 text-xl md:text-3xl placeholder:text-gray-500 focus:outline-none focus:border-cf-black transition-colors rounded-none"
                                    />
                                    {errors.fullName && <p className="text-red-600 text-sm font-mono mt-2">{errors.fullName.message}</p>}
                                </div>

                                {/* Email */}
                                <div className="space-y-4">
                                    <label className="block text-xl md:text-2xl font-semibold tracking-tight">
                                        2. Seu melhor e-mail
                                    </label>
                                    <input
                                        {...register("email", {
                                            required: "E-mail é obrigatório",
                                            pattern: { value: /^\S+@\S+$/i, message: "E-mail inválido" }
                                        })}
                                        type="email"
                                        placeholder="exemplo@email.com"
                                        className="w-full bg-transparent border-b border-cf-lines py-4 text-xl md:text-3xl placeholder:text-gray-500 focus:outline-none focus:border-cf-black transition-colors rounded-none"
                                    />
                                    {errors.email && <p className="text-red-600 text-sm font-mono mt-2">{errors.email.message}</p>}
                                </div>

                                {/* WhatsApp & Idade (Grid) */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    {/* WhatsApp */}
                                    <div className="space-y-4">
                                        <label className="block text-xl md:text-2xl font-semibold tracking-tight">
                                            3. WhatsApp
                                        </label>
                                        <input
                                            {...register("whatsapp", {
                                                required: "Telefone é obrigatório",
                                                minLength: { value: 14, message: "Número incompleto" }
                                            })}
                                            onChange={handlePhoneChange}
                                            type="tel"
                                            placeholder="(00) 00000-0000"
                                            className="w-full bg-transparent border-b border-cf-lines py-4 text-xl md:text-3xl placeholder:text-gray-500 focus:outline-none focus:border-cf-black transition-colors rounded-none"
                                        />
                                        {errors.whatsapp && <p className="text-red-600 text-sm font-mono mt-2">{errors.whatsapp.message}</p>}
                                    </div>

                                    {/* Idade */}
                                    <div className="space-y-4">
                                        <label className="block text-xl md:text-2xl font-semibold tracking-tight">
                                            4. Idade
                                        </label>
                                        <input
                                            {...register("age", {
                                                required: "Idade é obrigatória",
                                                min: { value: 14, message: "Mínimo 14 anos" },
                                                max: { value: 22, message: "Máximo 22 anos" }
                                            })}
                                            type="number"
                                            placeholder="00"
                                            className="w-full bg-transparent border-b border-cf-lines py-4 text-xl md:text-3xl placeholder:text-gray-500 focus:outline-none focus:border-cf-black transition-colors rounded-none"
                                        />
                                        {errors.age && <p className="text-red-600 text-sm font-mono mt-2">{errors.age.message}</p>}
                                    </div>
                                </div>

                                {/* Sebrae */}
                                <div className="space-y-6">
                                    <label className="block text-xl md:text-2xl font-semibold tracking-tight">
                                        5. Você estuda na Escola do Sebrae?
                                    </label>
                                    <div className="flex gap-8">
                                        {["sim", "nao"].map((opt) => (
                                            <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                                                <input
                                                    {...register("isSebraeStudent")}
                                                    type="radio"
                                                    value={opt}
                                                    className="appearance-none w-6 h-6 border border-cf-lines checked:bg-cf-black checked:border-cf-black transition-all rounded-none"
                                                />
                                                <span className="font-mono text-sm uppercase tracking-widest group-hover:opacity-70 transition-opacity">
                                                    {opt === "sim" ? "Sim" : "Não"}
                                                </span>
                                            </label>
                                        ))}
                                    </div>

                                    {/* Conditional Info */}
                                    <div className="mt-4">
                                        {isSebraeStudent === "sim" ? (
                                            <div className="relative">
                                                <select
                                                    {...register("sebraeClass", { required: isSebraeStudent === "sim" })}
                                                    className="w-full appearance-none bg-transparent border-b border-cf-lines py-4 text-xl md:text-3xl focus:outline-none focus:border-cf-black rounded-none cursor-pointer"
                                                >
                                                    <option value="" disabled selected>Selecione sua turma</option>
                                                    {SEBRAE_CLASSES.map(cls => (
                                                        <option key={cls} value={cls}>{cls}</option>
                                                    ))}
                                                </select>
                                                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none w-6 h-6 opacity-30" />
                                                {errors.sebraeClass && <p className="text-red-600 text-sm font-mono mt-2">Selecione uma turma</p>}
                                            </div>
                                        ) : (
                                            <div>
                                                <input
                                                    {...register("institutionName", { required: isSebraeStudent === "nao" })}
                                                    type="text"
                                                    placeholder="Qual instituição de ensino?"
                                                    className="w-full bg-transparent border-b border-cf-lines py-4 text-xl md:text-3xl placeholder:text-gray-500 focus:outline-none focus:border-cf-black transition-colors rounded-none"
                                                />
                                                {errors.institutionName && <p className="text-red-600 text-sm font-mono mt-2">Informe a instituição</p>}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Navigation */}
                                <div className="pt-10 flex justify-end">
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className="bg-cf-black text-cf-white px-10 py-4 font-mono text-sm uppercase tracking-widest hover:bg-black/80 transition-colors flex items-center gap-3"
                                    >
                                        Próximo
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>

                            </motion.div>
                        )}

                        {/* --- STEP 2: SOBRE VOCÊ --- */}
                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-16"
                            >
                                <div className="space-y-2">
                                    <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">O Pitch</h2>
                                    <p className="font-mono text-xs text-cf-dim tracking-widest uppercase">Sobre Você</p>
                                </div>

                                {[
                                    {
                                        id: "whyChooseYou",
                                        label: "6. Por que você deve ser escolhido para o CF Club?",
                                        max: 500
                                    },
                                    {
                                        id: "contribution",
                                        label: "7. Como você pretende contribuir com a comunidade?",
                                        max: 400
                                    },
                                    {
                                        id: "mainValue",
                                        label: "8. Qual seu principal valor e por quê?",
                                        max: 400
                                    },
                                    {
                                        id: "learningExpectations",
                                        label: "9. O que você espera aprender nestas 10 semanas?",
                                        max: 400
                                    }
                                ].map((field) => (
                                    <div key={field.id} className="space-y-4">
                                        <label className="block text-xl md:text-2xl font-semibold tracking-tight">
                                            {field.label}
                                        </label>
                                        <textarea
                                            {...register(field.id as keyof FormInputs, {
                                                required: "resposta obrigatória",
                                                maxLength: { value: field.max, message: `Máximo ${field.max} caracteres` }
                                            })}
                                            rows={2}
                                            className="w-full bg-transparent border-b border-cf-lines py-4 text-xl md:text-3xl resize-none placeholder:text-gray-500 focus:outline-none focus:border-cf-black transition-colors rounded-none"
                                            placeholder="Sua resposta..."
                                        />
                                        <div className="flex justify-between items-center text-xs font-mono text-cf-dim">
                                            <span>{errors[field.id as keyof FormInputs]?.message}</span>
                                            <span>MAX {field.max} CHARS</span>
                                        </div>
                                    </div>
                                ))}

                                {/* Navigation */}
                                <div className="pt-10 flex justify-between">
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        className="text-cf-dim hover:text-cf-black px-6 py-4 font-mono text-sm uppercase tracking-widest transition-colors flex items-center gap-3"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                        Voltar
                                    </button>
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className="bg-cf-black text-cf-white px-10 py-4 font-mono text-sm uppercase tracking-widest hover:bg-black/80 transition-colors flex items-center gap-3"
                                    >
                                        Próximo
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* --- STEP 3: DESCOBERTA E TERMOS --- */}
                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-16"
                            >
                                <div className="space-y-2">
                                    <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">Finalização</h2>
                                    <p className="font-mono text-xs text-cf-dim tracking-widest uppercase">Últimos Detalhes</p>
                                </div>

                                {/* Discovery */}
                                <div className="space-y-6">
                                    <label className="block text-xl md:text-2xl font-semibold tracking-tight">
                                        10. Como você descobriu o CF Club?
                                    </label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {DISCOVERY_OPTIONS.map((option) => {
                                            const isSelected = discoveryChannel?.includes(option.value);
                                            return (
                                                <label
                                                    key={option.value}
                                                    className={clsx(
                                                        "border p-6 cursor-pointer transition-all flex items-center justify-between group",
                                                        isSelected ? "border-cf-black bg-cf-black text-cf-white" : "border-cf-lines hover:border-cf-black"
                                                    )}
                                                >
                                                    <span className="font-mono text-sm uppercase tracking-wide">
                                                        {option.label}
                                                    </span>
                                                    <input
                                                        {...register("discoveryChannel", { required: true })}
                                                        type="checkbox"
                                                        value={option.value}
                                                        className="hidden"
                                                    />
                                                    {isSelected && <Check className="w-4 h-4" />}
                                                </label>
                                            );
                                        })}
                                    </div>

                                    {discoveryChannel?.includes("outro") && (
                                        <input
                                            {...register("discoveryOther", { required: discoveryChannel.includes("outro") })}
                                            type="text"
                                            placeholder="Como?"
                                            className="w-full mt-4 bg-transparent border-b border-cf-lines py-2 text-xl focus:outline-none focus:border-cf-black transition-colors rounded-none"
                                        />
                                    )}
                                </div>

                                {/* Terms */}
                                <div className="pt-8 border-t border-cf-lines">
                                    <label className={clsx("flex items-start gap-4 group", termsLinkOpened ? "cursor-pointer" : "cursor-not-allowed opacity-60")}>
                                        <div className="relative flex items-center">
                                            <input
                                                {...register("termsAccepted", { required: "Você deve aceitar os termos" })}
                                                type="checkbox"
                                                disabled={!termsLinkOpened}
                                                className="peer appearance-none w-6 h-6 border border-cf-lines checked:bg-cf-black checked:border-cf-black transition-all rounded-none disabled:cursor-not-allowed"
                                            />
                                            <Check className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 left-1 pointer-events-none" />
                                        </div>
                                        <div className="space-y-2">
                                            <span className="font-serif text-xl font-bold leading-none block transition-opacity">
                                                11. <a
                                                    href="https://drive.google.com/file/d/1jGDgXqbIxJf_3IzFuKX3deRfa_ZGnkKZ/view?usp=drive_link"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline pointer-events-auto"
                                                    onClick={handleTermsLinkClick}
                                                >
                                                    Termos e Condições
                                                </a>
                                            </span>
                                            <p className="font-mono text-xs text-cf-dim leading-relaxed max-w-xl">
                                                Declaro que todas as informações acima são verdadeiras.
                                                Entendo que o CF Club é um programa de alta performance e me comprometo a participar ativamente.
                                            </p>
                                            {!termsLinkOpened && (
                                                <p className="text-cf-dim text-xs font-mono italic text-orange-600">
                                                    * Clique no link acima para ler os termos antes de aceitar.
                                                </p>
                                            )}
                                            {errors.termsAccepted && <p className="text-red-600 text-sm font-mono mt-1">É necessário aceitar para continuar</p>}
                                        </div>
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-10 flex flex-col gap-4">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-cf-black text-cf-white py-8 text-xl md:text-2xl font-bold font-serif uppercase tracking-widest hover:bg-black/90 transition-all active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? "ENVIANDO..." : "ENVIAR APLICAÇÃO"}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        disabled={isLoading}
                                        className="w-full text-center text-cf-dim hover:text-cf-black py-4 font-mono text-xs uppercase tracking-widest transition-colors disabled:opacity-50"
                                    >
                                        Voltar e Revisar
                                    </button>
                                </div>

                            </motion.div>
                        )}

                    </AnimatePresence>
                </form>
            </div>
        </main>
    );
}
