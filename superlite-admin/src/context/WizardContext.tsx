import { createContext, useContext, useState, ReactNode } from 'react';

export type ContentType = 'blog' | 'project' | null;

export interface WizardState {
    step: number;
    contentType: ContentType;
    title: string;
    description: string;
    content: string;
    tags: string[];
    images: any[];
    date: string;
}

interface WizardContextType {
    state: WizardState;
    setStep: (step: number) => void;
    updateState: (updates: Partial<WizardState>) => void;
    nextStep: () => void;
    prevStep: () => void;
}

const defaultState: WizardState = {
    step: 1,
    contentType: null,
    title: '',
    description: '',
    content: '',
    tags: [],
    images: [],
    date: new Date().toISOString(),
};

const WizardContext = createContext<WizardContextType | undefined>(undefined);

export function WizardProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<WizardState>(defaultState);

    const updateState = (updates: Partial<WizardState>) => {
        setState((prev) => ({ ...prev, ...updates }));
    };

    const setStep = (step: number) => updateState({ step });
    const nextStep = () => updateState({ step: Math.min(state.step + 1, 7) });
    const prevStep = () => updateState({ step: Math.max(state.step - 1, 1) });

    return (
        <WizardContext.Provider value={{ state, setStep, updateState, nextStep, prevStep }}>
            {children}
        </WizardContext.Provider>
    );
}

export function useWizard() {
    const context = useContext(WizardContext);
    if (context === undefined) {
        throw new Error('useWizard must be used within a WizardProvider');
    }
    return context;
}
