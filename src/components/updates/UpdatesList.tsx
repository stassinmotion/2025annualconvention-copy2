
import React from 'react';
import UpdateCard from './UpdateCard';
import { Update } from './types';

interface UpdatesListProps {
  updates: Update[];
}

const UpdatesList = ({ updates }: UpdatesListProps) => {
  return (
    <div className="space-y-8">
      {updates.length > 0 ? (
        updates.map(update => <UpdateCard key={update.id} update={update} />)
      ) : (
        <div className="text-center py-8">
          <p className="text-racing-gray">No updates available for the selected filter.</p>
        </div>
      )}
    </div>
  );
};

export default UpdatesList;
