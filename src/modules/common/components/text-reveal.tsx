import { motion } from "motion/react";

interface TextRevealProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export default function TextReveal({
  className,
  children,
}: TextRevealProps): React.ReactNode {
  return (
    <motion.p
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        scale: { type: "spring", visualDuration: 1, bounce: 0.1 },
      }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.p>
  );
}
