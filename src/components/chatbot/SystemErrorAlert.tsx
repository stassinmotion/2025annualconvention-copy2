
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface SystemErrorAlertProps {
  errorMessage: string;
}

const SystemErrorAlert = ({ errorMessage }: SystemErrorAlertProps) => {
  return (
    <Alert variant="destructive" className="m-2 border-red-300">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription className="text-xs">
        System error: {errorMessage}
      </AlertDescription>
    </Alert>
  );
};

export default SystemErrorAlert;
