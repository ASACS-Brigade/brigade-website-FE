interface Props {
  title: string;
  subtitle: string;
}

export default function SectionHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-12">

      <h2 className="text-4xl font-bold text-[#0E2A47]">

        {title}

      </h2>

      <p className="mt-4 text-gray-600 max-w-2xl">

        {subtitle}

      </p>

    </div>
  );
}