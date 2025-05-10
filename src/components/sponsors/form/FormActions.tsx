
import React from 'react';
import { Button } from "@/components/ui/button";

interface FormActionsProps {
  onClose: () => void;
  isSubmitting: boolean;
}

const FormActions: React.FC<FormActionsProps> = ({ onClose, isSubmitting }) => {
  return (
    <div className="flex justify-end space-x-4">
      <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
        Cancel
      </Button>
      <Button 
        type="submit" 
        className="bg-racing-red hover:bg-red-700 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </Button>
    </div>
  );
};

export default FormActions;
