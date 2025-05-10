
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, AlertCircle, Tag } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { Update } from './types';
import CollapsibleUpdateContent from './CollapsibleContent';
import DownloadButton from './DownloadButton';

interface UpdateCardProps {
  update: Update;
}

const UpdateCard = ({ update }: UpdateCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-racing-blue hover:shadow-lg transition-shadow"
    >
      <Card className="border-0">
        <CardHeader className="pb-2 flex flex-row justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-racing-black">{update.title}</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {/* Audience Tag */}
              <div className="flex items-center">
                <Tag size={14} className="mr-1.5 text-racing-blue" />
                <Badge variant="outline" className="bg-racing-blue/10 border-racing-blue/30 text-racing-blue">
                  {Array.isArray(update.audience) ? update.audience.join(", ") : update.audience}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Badge className="bg-racing-silver hover:bg-racing-silver/80 text-racing-black font-medium py-1.5 px-3 rounded-md cursor-default">
              <Calendar size={14} className="mr-1.5" />
              {update.date}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="prose text-racing-gray">
            <p className="text-left">{update.content}</p>
            
            {update.additionalInfo && (
              <CollapsibleUpdateContent additionalInfo={update.additionalInfo} />
            )}
          </div>
        </CardContent>

        <CardFooter className="flex flex-wrap gap-2 pt-0 justify-between">
          <div className="flex gap-2">
            {update.type === "important" && (
              <Alert className="bg-racing-red/10 text-racing-red border-racing-red/30 w-auto inline-flex px-3 py-2 h-9">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle className="ml-2 text-sm font-medium">Important notice</AlertTitle>
              </Alert>
            )}
          </div>
          
          {update.hasDownload && update.downloadUrl && (
            <DownloadButton downloadUrl={update.downloadUrl} />
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default UpdateCard;
