import { Code, Shield, TrendingUp, Server, Check } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import styles from './CompanyActivity.module.css';

interface ActivityItem {
  id: number;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}

const activities: ActivityItem[] = [
  {
    id: 1,
    text: "Dasturiy ta'minot ishlab chiqish va texnik qo'llab-quvvatlash",
    icon: Code,
  },
  {
    id: 2,
    text: "Biznes jarayonlarini raqamlashtirish va optimallashtirish",
    icon: TrendingUp,
  },
  {
    id: 3,
    text: "Axborot xavfsizligi va ma'lumotlar muhofazasi",
    icon: Shield,
  },
  {
    id: 4,
    text: "IT infratuzilmasini modernizatsiya qilish va rivojlantirish",
    icon: Server,
  },
];

const floatingIcons = [
  { icon: Code, position: { top: '15%', left: '10%' }, delay: 0, duration: 3 },
  { icon: Shield, position: { top: '25%', right: '15%' }, delay: 0.5, duration: 3.5 },
  { icon: TrendingUp, position: { bottom: '20%', left: '12%' }, delay: 1, duration: 4 },
  { icon: Server, position: { bottom: '30%', right: '10%' }, delay: 1.5, duration: 4.5 },
];

export default function CompanyActivity() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id='company-activity' ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}>
          <h2 className={styles.title}>Kompaniya Faoliyati</h2>
          <p className={styles.subtitle}>
            Biz taqdim etadigan yechimlar va xizmatlar
          </p>
        </div>

        {/* Two Column Layout */}
        <div className={styles.grid}>
          {/* Left Column - Features List */}
          <div className={`${styles.activitiesList} ${isVisible ? styles.visible : styles.hidden}`}>
            {activities.map((activity, index) => (
              <ActivityCard 
                key={activity.id} 
                activity={activity} 
                index={index} 
                isVisible={isVisible} 
              />
            ))}
          </div>

          {/* Right Column - Illustration Card */}
          <div className={`${styles.illustrationWrapper} ${isVisible ? styles.visible : styles.hidden}`}>
            <IllustrationCard isVisible={isVisible} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ActivityCard({ 
  activity, 
  index, 
  isVisible 
}: { 
  activity: ActivityItem; 
  index: number; 
  isVisible: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = activity.icon;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${styles.activityCard} ${isVisible ? styles.visible : styles.hidden}`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Icon Container */}
      <div className={styles.iconContainer}>
        <Icon className={styles.icon} />
      </div>

      {/* Text */}
      <div className={styles.textContent}>
        <p className={styles.activityText}>{activity.text}</p>
      </div>
    </div>
  );
}

function IllustrationCard({ isVisible }: { isVisible: boolean }) {
  return (
    <div className={styles.illustrationContainer}>
      {/* Glassmorphism Card */}
      <div className={`${styles.illustrationCard} ${isVisible ? styles.visible : styles.hidden}`}>
        {/* Decorative gradient blobs */}
        <div className={styles.blobTop} />
        <div className={styles.blobBottom} />

        {/* Center Circle Container */}
        <div className={styles.centerCircleContainer}>
          {/* Outer Ring */}
          <div className={styles.outerRing} />

          {/* Middle Ring */}
          <div className={styles.middleRing} />

          {/* Center Success Circle */}
          <div className={`${styles.centerCircle} ${isVisible ? styles.visible : styles.hidden}`}>
            <Check className={styles.checkIcon} />
          </div>

          {/* Floating Icon Bubbles */}
          {floatingIcons.map((item, index) => {
            const FloatingIcon = item.icon;
            return (
              <div
                key={index}
                className={`${styles.floatingIcon} ${isVisible ? styles.visible : styles.hidden} ${isVisible ? styles.animating : ''}`}
                style={{
                  ...item.position,
                  animationDuration: `${item.duration}s`,
                  animationDelay: `${item.delay}s`,
                  transitionDelay: `${500 + item.delay * 200}ms`,
                }}
              >
                <FloatingIcon className={styles.floatingIconImage} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}