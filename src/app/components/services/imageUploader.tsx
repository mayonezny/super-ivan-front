'use client';
import { useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import { FilePondFile } from 'filepond';

registerPlugin(FilePondPluginFileValidateType, FilePondPluginFileValidateSize);

const ImageUploader = ({ controllerField, className }) => {

  const handleFileSet = (files) => {
    const file = files.length > 0 ? files[0] : null;
    controllerField.onChange(file);
    console.log('ivanva', file);
  };

  return (
    <FilePond
      className={className}
      onupdatefiles={handleFileSet}
      acceptedFileTypes={['image/jpeg', 'image/png', 'image/gif']}
      fileValidateTypeLabelExpectedTypes="Попробуешь загрузить какой-нибудь другой файл - я тебя пиздану"
      allowMultiple={false}
      maxFileSize='3MB'
      labelMaxFileSizeExceeded="Файл слишком большой"
      labelMaxFileSize="Максимальный размер: 3MB"
      name="file"
      labelIdle='<span class="filepond-label">Кликай на меня чтобы загрузить фото поста (или просто дропни его сюда)</span>'
      credits={false}
      server={{
        process: (fieldName, file, metadata, load, error, progress) => {
          let progressValue = 0;
          const interval = setInterval(() => {
            progress(true, progressValue, 100); // Эмулируем прогресс
            progressValue += 10;
            if (progressValue > 100) {
              clearInterval(interval);
              load('done'); // Завершаем загрузку
            }
          }, 200);
        },
      }}
    />
  );
};

export default ImageUploader;
