import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  index?: number;
}

export default function StatCard({ value, label, index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">{value}</div>
      <div className="text-sm text-dark-foreground/70">{label}</div>
    </motion.div>
  );
}
