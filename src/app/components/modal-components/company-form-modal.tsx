'use client';

import CompanyForm, { CompanyFormProps } from './company-form';
import Modal, { ModalProps } from './modal';

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
