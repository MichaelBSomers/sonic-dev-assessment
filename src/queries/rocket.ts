import { gql } from "@apollo/client";

export default gql`
  query Rocket($id: ID!) {
    rocket(id: $id) {
      id
      active
      boosters
      company
      cost_per_launch
      country
      description
      first_flight
      first_stage {
        burn_time_sec
        engines
        fuel_amount_tons
        reusable
        thrust_sea_level {
          kN
          lbf
        }
        thrust_vacuum {
          kN
          lbf
        }
      }
      engines {
        number
        type
        version
        layout
        engine_loss_max
        propellant_1
        propellant_2
        thrust_to_weight
        thrust_sea_level {
          kN
          lbf
        }
        thrust_vacuum {
          kN
          lbf
        }
      }
      diameter {
        feet
        meters
      }
      landing_legs {
        number
        material
      }
      mass {
        kg
        lb
      }
      name
      payload_weights {
        id
        lb
        name
        kg
      }
      second_stage {
        burn_time_sec
        engines
        fuel_amount_tons
        payloads {
          composite_fairing {
            diameter {
              feet
              meters
            }
            height {
              feet
              meters
            }
          }
          option_1
        }
        thrust {
          kN
          lbf
        }
      }
      stages
      success_rate_pct
      type
      wikipedia
      height {
        feet
        meters
      }
    }
  }
`;
