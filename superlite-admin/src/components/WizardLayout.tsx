import { useWizard } from '../context/WizardContext';

export default function WizardLayout({ children }: { children: React.ReactNode }) {
    const { state, nextStep, prevStep } = useWizard();
    const totalSteps = 7;

    return (
        <div className="flex flex-col h-screen bg-bg-secondary w-full">
            {/* Header / Progress Bar */}
            <header className="bg-bg-primary border-b border-border p-4 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold text-text-primary">Superlite Admin</h1>
                    <span className="text-sm font-medium text-text-secondary uppercase">
                        Step {state.step} of {totalSteps}
                    </span>
                </div>

                <div className="w-full bg-border h-2 rounded-full overflow-hidden">
                    <div
                        className="bg-accent h-full transition-all duration-300 ease-out"
                        style={{ width: `${(state.step / totalSteps) * 100}%` }}
                    />
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 overflow-auto p-6 md:p-8 flex justify-center w-full">
                <div className="w-full max-w-4xl bg-bg-primary rounded-xl shadow-sm border border-border p-6 flex flex-col h-full">
                    <div className="flex-1 flex flex-col">
                        {children}
                    </div>

                    {/* Navigation Footer */}
                    <footer className="mt-8 pt-4 border-t border-border flex justify-between items-center mt-auto">
                        <button
                            onClick={prevStep}
                            className={`px-4 py-2 rounded-lg text-text-secondary hover:bg-border transition-colors ${state.step === 1 ? 'opacity-0 pointer-events-none' : ''}`}
                        >
                            ← Back
                        </button>
                        <button
                            onClick={nextStep}
                            className={`px-6 py-2 bg-accent text-white rounded-lg hover:bg-blue-600 transition-colors shadow-sm font-medium ${state.step === totalSteps ? 'hidden' : ''}`}
                        >
                            Next →
                        </button>
                    </footer>
                </div>
            </main>
        </div>
    );
}
