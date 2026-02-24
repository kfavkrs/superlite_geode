import { WizardProvider, useWizard } from './context/WizardContext';
import WizardLayout from './components/WizardLayout';
import Step1_ContentType from './components/steps/Step1_ContentType';
import Step2_Import from './components/steps/Step2_Import';
import Step3_Enhancement from './components/steps/Step3_Enhancement';
import Step4_ImageSetup from './components/steps/Step4_ImageSetup';
import Step5_Refinement from './components/steps/Step5_Refinement';
import Step6_FinalPreview from './components/steps/Step6_FinalPreview';
import Step7_Publish from './components/steps/Step7_Publish';

function WizardRouter() {
  const { state } = useWizard();

  switch (state.step) {
    case 1: return <Step1_ContentType />;
    case 2: return <Step2_Import />;
    case 3: return <Step3_Enhancement />;
    case 4: return <Step4_ImageSetup />;
    case 5: return <Step5_Refinement />;
    case 6: return <Step6_FinalPreview />;
    case 7: return <Step7_Publish />;
    default: return <Step1_ContentType />;
  }
}

function App() {
  return (
    <WizardProvider>
      <WizardLayout>
        <div className="flex-1 w-full h-full">
          <WizardRouter />
        </div>
      </WizardLayout>
    </WizardProvider>
  );
}

export default App;
