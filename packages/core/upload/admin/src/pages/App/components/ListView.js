import React from 'react';
import PropTypes from 'prop-types';
import { GridLayout } from '@strapi/parts/Layout';
import { KeyboardNavigable } from '@strapi/parts/KeyboardNavigable';
import { prefixFileUrlWithBackendUrl, getFileExtension } from '@strapi/helper-plugin';
import { ImageAssetCard } from '../../../components/AssetCard/ImageAssetCard';
import { VideoAssetCard } from '../../../components/AssetCard/VideoAssetCard';
import { DocAssetCard } from '../../../components/AssetCard/DocAssetCard';
  <<<<<<< chore/test-config
  =======
import { AssetType } from '../../../constants';
  >>>>>>> add-asset-to-pending

export const ListView = ({ assets }) => {
  return (
    <KeyboardNavigable tagName="article">
      <GridLayout>
        {assets.map(asset => {
  <<<<<<< chore/test-config
          if (asset.mime.includes('video')) {
  =======
          if (asset.mime.includes(AssetType.Video)) {
  >>>>>>> add-asset-to-pending
            return (
              <VideoAssetCard
                id={asset.id}
                key={asset.id}
                name={asset.name}
                extension={getFileExtension(asset.ext)}
                url={prefixFileUrlWithBackendUrl(asset.url)}
                mime={asset.mime}
              />
            );
          }

  <<<<<<< chore/test-config
          if (asset.mime.includes('image')) {
  =======
          if (asset.mime.includes(AssetType.Image)) {
  >>>>>>> add-asset-to-pending
            return (
              <ImageAssetCard
                id={asset.id}
                key={asset.id}
                name={asset.name}
                extension={getFileExtension(asset.ext)}
                height={asset.height}
                width={asset.width}
                thumbnail={prefixFileUrlWithBackendUrl(asset?.formats?.thumbnail?.url || asset.url)}
              />
            );
          }

          return (
            <DocAssetCard
              id={asset.id}
              key={asset.id}
              name={asset.name}
              extension={getFileExtension(asset.ext)}
            />
          );
        })}
      </GridLayout>
    </KeyboardNavigable>
  );
};

ListView.propTypes = {
  assets: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
