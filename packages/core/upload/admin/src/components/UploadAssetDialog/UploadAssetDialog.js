import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ModalLayout } from '@strapi/parts/ModalLayout';
import { AddAssetStep } from './AddAssetStep/AddAssetStep';
import { PendingAssetStep } from './PendingAssetStep/PendingAssetStep';

const Steps = {
  AddAsset: 'AddAsset',
  PendingAsset: 'PendingAsset',
};

export const UploadAssetDialog = ({ onSuccess, onClose }) => {
  const [step, setStep] = useState(Steps.AddAsset);
  <<<<<<< chore/test-config

  const handleAddToPendingAssets = () => {
  =======
  const [assets, setAssets] = useState([]);

  const handleAddToPendingAssets = nextAssets => {
    setAssets(prevAssets => prevAssets.concat(nextAssets));
  >>>>>>> add-asset-to-pending
    setStep(Steps.PendingAsset);
    onSuccess();
  };

  return (
    <ModalLayout onClose={onClose} labelledBy="title">
      {step === Steps.AddAsset && (
        <AddAssetStep onClose={onClose} onAddAsset={handleAddToPendingAssets} />
      )}
  <<<<<<< chore/test-config
      {step === Steps.PendingAsset && <PendingAssetStep onClose={onClose} />}
  =======
      {step === Steps.PendingAsset && <PendingAssetStep onClose={onClose} assets={assets} />}
  >>>>>>> add-asset-to-pending
    </ModalLayout>
  );
};

UploadAssetDialog.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
