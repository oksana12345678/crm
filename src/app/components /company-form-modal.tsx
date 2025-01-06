'use client';

import CompanyForm, { CompanyFormProps } from './company-form';
import { ModalProps } from './modal';
import Modal from './modal';

export interface CompanyFormModalProps extends ModalProps {
  onSubmit: CompanyFormProps['onSubmit'];
}

function CompanyFormModal({ onSubmit, ...rest }: CompanyFormModalProps) {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
}

export default CompanyFormModal;
