const moduleData = {
  machineName: "Respironics V60 Ventilator",
  modules: [
    {
      id: 1,
      moduleName: "Physical Description",
      estimatedTime: 15,
      totalTopics: 1,
      shortModuleDescription:
        "This module covers the physical description of the Respironics V60 Ventilator, including the patient circuits, masks/patient interfaces, and various accessories.",
      ModuleContent: [
        {
          id: 1,
          title: "Physical Description",
          titleDescription:
            "Overview of the ventilator's physical components and accessories.",
          image:
            "https://res.cloudinary.com/dzjqlqcnw/image/upload/v1711685290/vent_front_view_huqub1.png",
          video: null,
          content:
            "The Respironics V60 Ventilator comes with patient circuits, masks/patient interfaces, and various accessories. Figure 3-2 shows the ventilator with its patient circuit and accessories, while Table 3-1 on page 3-5 lists the recommended components. Appendix D provides ordering information for Respironics parts and accessories.",
        },
      ],
      assessment: {
        estimatedTime: "30",
        questions: [
          {
            id: 1,
            question:
              "What is the intended use of the Respironics V60 Ventilator?",
            difficulty: "easy",
            info: "The Respironics V60 Ventilator is an assist ventilator intended to augment patient breathing for spontaneously breathing individuals who require mechanical ventilation.",
            options: [
              {
                id: "a",
                option:
                  "To provide invasive ventilation for critically ill patients",
              },
              {
                id: "b",
                option:
                  "To augment patient breathing for spontaneously breathing individuals",
              },
              {
                id: "c",
                option: "To provide high-flow oxygen therapy",
              },
              {
                id: "d",
                option: "To monitor patients with respiratory failure",
              },
            ],
            answer: "b",
          },
          {
            id: 2,
            question:
              "Which ventilation mode on the Respironics V60 Ventilator combines the attributes of pressure-controlled and volume-targeted ventilation?",
            difficulty: "medium",
            info: "The AVAPS (Average Volume-Assured Pressure Support) mode on the Respironics V60 Ventilator combines the attributes of pressure-controlled and volume-targeted ventilation.",
            options: [
              {
                id: "a",
                option: "CPAP",
              },
              {
                id: "b",
                option: "PCV",
              },
              {
                id: "c",
                option: "S/T",
              },
              {
                id: "d",
                option: "AVAPS",
              },
            ],
            answer: "d",
          },
          {
            id: 3,
            question:
              "What is the purpose of the Auto-Trak Sensitivity feature on the Respironics V60 Ventilator?",
            difficulty: "medium",
            info: "The Auto-Trak Sensitivity feature on the Respironics V60 Ventilator automatically compensates for unintentional leaks by maintaining a stable baseline and adjusting trigger and cycle thresholds for optimum patient-ventilator synchrony.",
            options: [
              {
                id: "a",
                option:
                  "To adjust the ventilator's pressure delivery based on patient demand",
              },
              {
                id: "b",
                option:
                  "To monitor the patient's respiratory rate and adjust the ventilator settings accordingly",
              },
              {
                id: "c",
                option:
                  "To automatically adjust the ventilator's trigger and cycle thresholds to maintain a target tidal volume",
              },
              {
                id: "d",
                option:
                  "To compensate for unintentional leaks and maintain patient-ventilator synchrony",
              },
            ],
            answer: "d",
          },
          {
            id: 4,
            question:
              "What is the purpose of the preoperational check performed when starting up the Respironics V60 Ventilator?",
            difficulty: "easy",
            info: "The preoperational check performed when starting up the Respironics V60 Ventilator is to verify the ventilator's safe operation, including alarm functionality.",
            options: [
              {
                id: "a",
                option:
                  "To check the ventilator's power supply and battery charge level",
              },
              {
                id: "b",
                option:
                  "To calibrate the ventilator's pressure and flow sensors",
              },
              {
                id: "c",
                option:
                  "To verify the ventilator's safe operation, including alarm functionality",
              },
              {
                id: "d",
                option:
                  "To check the patient circuit for any leaks or obstructions",
              },
            ],
            answer: "c",
          },
          {
            id: 5,
            question:
              "What is the purpose of the Ramp Time function on the Respironics V60 Ventilator?",
            difficulty: "easy",
            info: "The Ramp Time function on the Respironics V60 Ventilator can be used to gradually increase pressure over a user-set interval, helping the patient adapt to ventilation.",
            options: [
              {
                id: "a",
                option:
                  "To gradually decrease pressure over a user-set interval, helping the patient transition off ventilation",
              },
              {
                id: "b",
                option:
                  "To automatically adjust the ventilator's pressure delivery based on the patient's respiratory effort",
              },
              {
                id: "c",
                option:
                  "To gradually increase pressure over a user-set interval, helping the patient adapt to ventilation",
              },
              {
                id: "d",
                option:
                  "To provide a constant, continuous positive airway pressure (CPAP) to the patient",
              },
            ],
            answer: "c",
          },
        ],
      },
    },
    {
      id: 2,
      moduleName: "Ventilator Unit and Graphical User Interface",
      estimatedTime: 20,
      totalTopics: 1,
      shortModuleDescription:
        "This module covers the ventilator unit, including its various controls, indicators, and important parts, as well as the graphical user interface that allows users to make ventilator settings and view ventilator and patient data.",
      ModuleContent: [
        {
          id: 1,
          title: "Ventilator Unit and Graphical User Interface",
          titleDescription:
            "Overview of the ventilator unit and its graphical user interface.",
          image:
            "https://res.cloudinary.com/dzjqlqcnw/image/upload/v1711685434/vent_with_accessory_z1vhyg.png",
          video:
            "https://res.cloudinary.com/dzjqlqcnw/video/upload/v1711686280/v60-training_nalzpf.mp4",
          content:
            "The ventilator unit has various controls, indicators, and important parts, as shown in Figures 3-3 through 3-5. The graphical user interface (Figure 3-6) allows you to make ventilator settings and view ventilator and patient data. During ventilation, the upper screen displays alarms and patient data, the middle screen shows real-time waveforms and alarm/informational messages, and the lower screen lets you access modes, settings, and power status.",
        },
      ],
    },
  ],
};
const assessmentData = {
  assessments: [
    {
      estimatedTime: "30",
      questions: [
        {
          id: 1,
          question:
            "What is the intended use of the Respironics V60 Ventilator?",
          difficulty: "easy",
          info: "The Respironics V60 Ventilator is an assist ventilator intended to augment patient breathing for spontaneously breathing individuals who require mechanical ventilation.",
          options: [
            {
              id: "a",
              option:
                "To provide invasive ventilation for critically ill patients",
            },
            {
              id: "b",
              option:
                "To augment patient breathing for spontaneously breathing individuals",
            },
            {
              id: "c",
              option: "To provide high-flow oxygen therapy",
            },
            {
              id: "d",
              option: "To monitor patients with respiratory failure",
            },
          ],
          answer: "b",
        },
        {
          id: 2,
          question:
            "Which ventilation mode on the Respironics V60 Ventilator combines the attributes of pressure-controlled and volume-targeted ventilation?",
          difficulty: "medium",
          info: "The AVAPS (Average Volume-Assured Pressure Support) mode on the Respironics V60 Ventilator combines the attributes of pressure-controlled and volume-targeted ventilation.",
          options: [
            {
              id: "a",
              option: "CPAP",
            },
            {
              id: "b",
              option: "PCV",
            },
            {
              id: "c",
              option: "S/T",
            },
            {
              id: "d",
              option: "AVAPS",
            },
          ],
          answer: "d",
        },
        {
          id: 3,
          question:
            "What is the purpose of the Auto-Trak Sensitivity feature on the Respironics V60 Ventilator?",
          difficulty: "medium",
          info: "The Auto-Trak Sensitivity feature on the Respironics V60 Ventilator automatically compensates for unintentional leaks by maintaining a stable baseline and adjusting trigger and cycle thresholds for optimum patient-ventilator synchrony.",
          options: [
            {
              id: "a",
              option:
                "To adjust the ventilator's pressure delivery based on patient demand",
            },
            {
              id: "b",
              option:
                "To monitor the patient's respiratory rate and adjust the ventilator settings accordingly",
            },
            {
              id: "c",
              option:
                "To automatically adjust the ventilator's trigger and cycle thresholds to maintain a target tidal volume",
            },
            {
              id: "d",
              option:
                "To compensate for unintentional leaks and maintain patient-ventilator synchrony",
            },
          ],
          answer: "d",
        },
        {
          id: 4,
          question:
            "What is the purpose of the preoperational check performed when starting up the Respironics V60 Ventilator?",
          difficulty: "easy",
          info: "The preoperational check performed when starting up the Respironics V60 Ventilator is to verify the ventilator's safe operation, including alarm functionality.",
          options: [
            {
              id: "a",
              option:
                "To check the ventilator's power supply and battery charge level",
            },
            {
              id: "b",
              option: "To calibrate the ventilator's pressure and flow sensors",
            },
            {
              id: "c",
              option:
                "To verify the ventilator's safe operation, including alarm functionality",
            },
            {
              id: "d",
              option:
                "To check the patient circuit for any leaks or obstructions",
            },
          ],
          answer: "c",
        },
        {
          id: 5,
          question:
            "What is the purpose of the Ramp Time function on the Respironics V60 Ventilator?",
          difficulty: "easy",
          info: "The Ramp Time function on the Respironics V60 Ventilator can be used to gradually increase pressure over a user-set interval, helping the patient adapt to ventilation.",
          options: [
            {
              id: "a",
              option:
                "To gradually decrease pressure over a user-set interval, helping the patient transition off ventilation",
            },
            {
              id: "b",
              option:
                "To automatically adjust the ventilator's pressure delivery based on the patient's respiratory effort",
            },
            {
              id: "c",
              option:
                "To gradually increase pressure over a user-set interval, helping the patient adapt to ventilation",
            },
            {
              id: "d",
              option:
                "To provide a constant, continuous positive airway pressure (CPAP) to the patient",
            },
          ],
          answer: "c",
        },
        {
          id: 6,
          question:
            "Which waveform can be displayed in the waveform window on the Respironics V60 Ventilator?",
          difficulty: "medium",
          info: "The waveform window on the Respironics V60 Ventilator can display the airway pressure, flow, and volume waveforms.",
          options: [
            {
              id: "a",
              option: "Airway pressure waveform",
            },
            {
              id: "b",
              option: "Flow waveform",
            },
            {
              id: "c",
              option: "Volume waveform",
            },
            {
              id: "d",
              option: "All of the above",
            },
          ],
          answer: "d",
        },
        {
          id: 7,
          question:
            "What is the purpose of the weekly preventive maintenance tasks for the Respironics V60 Ventilator?",
          difficulty: "medium",
          info: "The weekly preventive maintenance tasks for the Respironics V60 Ventilator involve inspecting and cleaning the patient circuit, including the mask and main flow bacteria filter.",
          options: [
            {
              id: "a",
              option: "To replace the air inlet filter and cooling fan filter",
            },
            {
              id: "b",
              option:
                "To inspect and clean the ventilator's exterior and touchscreen",
            },
            {
              id: "c",
              option:
                "To inspect and clean the patient circuit, including the mask and main flow bacteria filter",
            },
            {
              id: "d",
              option: "To replace the backup battery",
            },
          ],
          answer: "c",
        },
        {
          id: 8,
          question:
            "What is the recommended action for the user if the ventilator requires technical service or repair not covered in the manual?",
          difficulty: "easy",
          info: "The user is instructed to contact Respironics for any technical service or repair needs not covered in the manual.",
          options: [
            {
              id: "a",
              option:
                "Attempt to repair the ventilator themselves using available tools and resources",
            },
            {
              id: "b",
              option: "Send the ventilator back to the manufacturer for repair",
            },
            {
              id: "c",
              option:
                "Contact the local biomedical engineering department for assistance",
            },
            {
              id: "d",
              option:
                "Contact Respironics for any technical service or repair needs not covered in the manual",
            },
          ],
          answer: "d",
        },
        {
          id: 9,
          question:
            "Which alarm on the Respironics V60 Ventilator indicates a critical situation that requires immediate response to ensure patient safety?",
          difficulty: "medium",
          info: "High-priority alarms, such as the Check Vent and Vent Inoperative alarms, indicate a critical situation that requires immediate response to ensure patient safety.",
          options: [
            {
              id: "a",
              option: "High respiratory rate alarm",
            },
            {
              id: "b",
              option: "Low tidal volume alarm",
            },
            {
              id: "c",
              option: "Check Vent alarm",
            },
            {
              id: "d",
              option: "Low minute ventilation alarm",
            },
          ],
          answer: "c",
        },
        {
          id: 10,
          question:
            "What is the purpose of the external oxygen monitor that must be used with the Respironics V60 Ventilator?",
          difficulty: "medium",
          info: "An external oxygen monitor must be used with the Respironics V60 Ventilator to ensure accurate oxygen administration and monitor for contamination.",
          options: [
            {
              id: "a",
              option: "To monitor the patient's oxygen saturation levels",
            },
            {
              id: "b",
              option:
                "To control the oxygen concentration delivered by the ventilator",
            },
            {
              id: "c",
              option:
                "To ensure accurate oxygen administration and monitor for contamination",
            },
            {
              id: "d",
              option:
                "To provide backup oxygen delivery in case of ventilator failure",
            },
          ],
          answer: "c",
        },
      ],
    },
  ],
};
import { db } from "./firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";
const docRef = await addDoc(collection(db, "modules"), {
  createdAt: Date.now(),
  ...moduleData,
});

console.log("Document written with ID: ", docRef.id);
