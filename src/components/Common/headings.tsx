import styles from '../../styles/widget.module.scss';

const WidgetHeading = ({ label, classname }: any) => (
  <div className={`${classname || ''} ${styles.widgetHeader}`}>
    <span>{label}</span>
  </div>
);

export default WidgetHeading;
