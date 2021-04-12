import { useQuery } from "@apollo/client";
import { rocketQuery } from "../queries";

interface Rocket {
  id: string;
  active: boolean;
  boosters: number;
  company: string;
  cost_per_launch: number;
  country: string;
  description: string;
  first_flight: string;
  first_stage: {
    burn_time_sec: number;
    engines: number;
    fuel_amount_tons: number;
    reusable: false;
    thrust_sea_level: {
      kN: number;
      lbf: number;
    };
    thrust_vacuum: {
      kN: number;
      lbf: number;
    };
  };
  engines: {
    number: number;
    type: string;
    version: string;
    layout: string;
    engine_loss_max: string;
    propellant_1: string;
    propellant_2: string;
    thrust_to_weight: number;
    thrust_sea_level: {
      kN: number;
      lbf: number;
    };
    thrust_vacuum: {
      kN: number;
      lbf: number;
    };
  };
  diameter: {
    feet: number;
    meters: number;
  };
  landing_legs: {
    number: number;
    material: any;
  };
  mass: {
    kg: number;
    lb: number;
  };
  name: string;
  payload_weights: [
    {
      id: string;
      lb: number;
      name: string;
      kg: number;
    }
  ];
  second_stage: {
    burn_time_sec: number;
    engines: number;
    fuel_amount_tons: number;
    payloads: {
      composite_fairing: {
        diameter: {
          feet: number;
          meters: number;
        };
        height: {
          feet: number;
          meters: number;
        };
      };
      option_1: string;
    };
    thrust: {
      kN: number;
      lbf: number;
    };
  };
  stages: number;
  success_rate_pct: number;
  type: string;
  wikipedia: string;
  height: {
    feet: number;
    meters: number;
  };
}

const useRockets = (rocketId: String) => {
  return useQuery<{ rocket: Rocket }>(rocketQuery, {
    variables: { id: rocketId },
  });
};

export default useRockets;
