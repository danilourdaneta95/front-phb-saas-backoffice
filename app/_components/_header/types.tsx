export interface HeaderTypes {
  text: string;
  breadCrumb?: string;
  /* Manage Cancel button action / text */
  onCancel?: (event: React.MouseEvent) => void;
  cancelBtnText?: string;
  /* Manage Save button action / text */
  onSave?: (event: React.MouseEvent) => void;
  saveBtnText?: any;
  /* Manage New button action / text */
  showNewBtn?: boolean;
  onNew?: (event: React.MouseEvent) => void;
  newBtnText?: any;
  /* Manage if exist Tabs */
  hasTabs?: boolean;
}
