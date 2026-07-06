import {
  Award,
  Church,
  HeartHandshake,
  Music,
  Shield,
  TentTree,
  Users,
} from "lucide-react";

import type { GalleryStat } from "../../../../../data/gallery";

export const albumIcons = {
  users: Users,
  award: Award,
  church: Church,
  heart: HeartHandshake,
  music: Music,
  tent: TentTree,
  shield: Shield,
} satisfies Record<GalleryStat["icon"], React.ComponentType<{ size?: number; className?: string }>>;
