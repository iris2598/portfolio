import { useParams } from "react-router-dom";
import styles from "./Project.module.css";

import { projects } from "../../data";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <p>프로젝트를 찾을 수 없습니다.</p>;

  return (
    <div className={styles.project}>
      <img className={styles.mainImg} src={project.mainImg} alt="대표이미지" />
      <div className={styles.textField}>
        <div className={styles.titleField}>
          <div className={styles.subtitle}>{project.subtitle}</div>
          <div className={styles.title}>{project.title}</div>
        </div>
        <div className={styles.subField}>
          <div className={styles.period}>
            <p className={styles.label}>
              <strong>Period </strong>
            </p>
            <p className={styles.text}>{project.period}</p>
          </div>
          <div className={styles.description}>
            <p className={styles.text}>{project.description}</p>
          </div>
        </div>
      </div>
      <div className={styles.detail}>{project.img}</div>
    </div>
  );
};

export default ProjectDetail;
