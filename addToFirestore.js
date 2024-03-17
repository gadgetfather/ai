const moduleData = {
  machineName: "Respironics V60 Ventilator",
  modules: [
    {
      id: 1,
      moduleName: "General Information and Principles of Operation",
      estimatedTime: 60,
      totalTopics: 1,
      shortModuleDescription:
        "This module covers the general information and principles of operation for the Respironics V60 Ventilator.",
      ModuleContent: [
        {
          id: 1,
          title: "General Information and Principles of Operation",
          titleDescription:
            "An overview of the Respironics V60 Ventilator, its intended use, ventilation modes, and pneumatic system.",
          image: "",
          content:
            "The Respironics V60 Ventilator is an assist ventilator intended to augment patient breathing. It is designed for spontaneously breathing individuals who require mechanical ventilation, including patients with respiratory failure, chronic respiratory insufficiency, or obstructive sleep apnea. The ventilator can support both pediatric and adult patients, and can be used for both noninvasive and invasive ventilation.\n\nThe ventilator offers a range of conventional pressure modes, including CPAP (continuous positive airway pressure), PCV (pressure-controlled ventilation), and S/T (spontaneous/timed). It also offers the volume-targeted AVAPS (average volume-assured pressure support) mode, which combines the attributes of pressure-controlled and volume-targeted ventilation.\n\nThe ventilator uses Auto-Trak Sensitivity, which allows it to automatically compensate for unintentional leaks by maintaining a stable baseline and adjusting trigger and cycle thresholds for optimum patient-ventilator synchrony.\n\nThe ventilator's pneumatic system uses ambient air and high-pressure oxygen to deliver gas to the patient. The system compares the proximal (patient) pressure measurement with the ventilator outlet (machine) pressure, and adjusts the machine pressure to compensate for the pressure drop across the inspiratory filter, patient circuit, and humidifier. This helps ensure accurate and responsive pressure delivery and leak compensation.\n\nBreaths delivered by the ventilator are pressure controlled, with the exception of the AVAPS mode, in which the ventilator's applied pressure is automatically adjusted over several breaths to maintain a target tidal volume. The ventilator uses its unique Auto-Trak Sensitivity algorithm to adjust triggering and cycling automatically, without the need for the user to set these parameters.",
        },
      ],
    },
    {
      id: 2,
      moduleName: "Preparing for Ventilation",
      estimatedTime: 60,
      totalTopics: 1,
      shortModuleDescription:
        "This module covers the steps required to prepare the Respironics V60 Ventilator for use, including connecting external devices, oxygen, and the patient circuit, as well as starting up and shutting down the ventilator.",
      ModuleContent: [
        {
          id: 1,
          title: "Preparing for Ventilation",
          titleDescription:
            "Steps to set up the Respironics V60 Ventilator, including connecting oxygen, the patient circuit, and performing startup and shutdown procedures.",
          image: "",
          content:
            "The ventilator must be connected to an appropriate medical-grade oxygen source that can deliver 100% oxygen regulated to 276 to 600 kPa (40 to 87 psig). To ensure accurate oxygen administration and monitor for contamination, an external oxygen monitor must be used.\n\nThe patient circuit, including the main flow (inspiratory) bacteria filter, proximal pressure line, and humidifier (if used), must be properly assembled and positioned. Precautions are provided to ensure the circuit is not pushed, pulled, or kinked during use, and to prevent possible patient injury or water damage to the ventilator from the humidifier.\n\nThe ventilator is powered by AC mains, with an optional internal backup battery that can power the ventilator for typically 6 hours. The battery must be fully charged before use, and its charge level should be checked regularly, as battery charge is reduced at low ambient temperatures or during continuous alarm conditions.\n\nTo start up the ventilator, the user powers it on with the ON/Shutdown key. A preoperational check must then be performed to verify the ventilator's safe operation, including alarm functionality. This check involves connecting a test lung, setting specific ventilation parameters, and verifying the ventilator's response to various alarm conditions, such as high inspiratory pressure, low tidal volume, patient disconnect, and patient circuit occlusion.\n\nShutting down the ventilator involves pressing the ON/Shutdown key and selecting \"Ventilator Shutdown\" from the displayed menu.\n\nThe graphical user interface (GUI) is used to navigate the ventilator's settings and functions. The touchscreen and navigation ring allow the user to select, adjust, activate, and confirm parameters. The GUI includes windows for adjusting modes, settings, alarms, and other functions, as well as displaying patient data and waveforms.",
        },
      ],
    },
    {
      id: 3,
      moduleName: "Operation",
      estimatedTime: 60,
      totalTopics: 1,
      shortModuleDescription:
        "This module covers the operation of the Respironics V60 Ventilator, including changing ventilation modes, adjusting control and alarm settings, and using various ventilator functions.",
      ModuleContent: [
        {
          id: 1,
          title: "Operation",
          titleDescription:
            "How to change ventilation modes, adjust settings, and use the various functions of the Respironics V60 Ventilator.",
          image: "",
          content:
            "To change the ventilation mode, the user opens the Modes window, selects the desired mode, adjusts the associated settings as needed, and activates the mode. The ventilator offers CPAP, PCV, S/T, and AVAPS modes, each with its own set of control settings.\n\nControl settings can be adjusted individually or in batches. Individual settings are accessed and adjusted through the Settings window, while batch changes are made through the Modes window. Settings that can be adjusted include IPAP, EPAP, respiratory rate, inspiratory time, rise time, oxygen concentration, and in the AVAPS mode, the minimum and maximum IPAP pressures and target tidal volume.\n\nThe Ramp Time function can be used to gradually increase pressure over a user-set interval, helping the patient adapt to ventilation. The Ramp Time button is selected to start the ramp, and can be selected again to end the ramp or start a new one.\n\nAlarm settings can also be adjusted as needed, with the user able to set limits for parameters like high and low respiratory rate, high and low tidal volume, high inspiratory pressure, and low minute ventilation. The Alarm Settings window is used to access and adjust these alarm limits.\n\nOther ventilator functions include selecting the mask and exhalation port type through the Menu window, which is important for accurate leak and volume monitoring. The exhalation port can also be tested to ensure proper operation.\n\nThe Menu window provides access to additional user preferences, such as adjusting the screen brightness and loudness, viewing ventilator information, locking the screen, and entering standby mode to temporarily suspend ventilation.\n\nThe Help function provides on-screen guidance and information about the ventilator's operation.",
        },
      ],
    },
    {
      id: 4,
      moduleName: "Patient Monitoring and Alarms",
      estimatedTime: 60,
      totalTopics: 1,
      shortModuleDescription:
        "This module covers patient monitoring and alarms on the Respironics V60 Ventilator.",
      ModuleContent: [
        {
          id: 1,
          title: "Patient Monitoring and Alarms",
          titleDescription:
            "How to monitor the patient's status and respond to alarms on the Respironics V60 Ventilator.",
          image: "",
          content:
            "The ventilator displays numeric patient data in the patient data window and real-time graphics in the waveform window. Monitored parameters include peak inspiratory pressure, estimated patient leak, patient-triggered breaths, respiratory rate, inspiratory duty cycle, estimated minute ventilation, and estimated exhaled tidal volume.\n\nThe waveform window displays the airway pressure, flow, and volume waveforms. The user can scale the vertical and horizontal axes of the waveforms using the onscreen buttons, and can freeze and unfreeze the waveforms for closer inspection.\n\nAlarms and messages on the ventilator alert the user to conditions that require attention. Alarms can be high-priority, low-priority, or informational messages. High-priority alarms, such as the Check Vent and Vent Inoperative alarms, indicate a critical situation that requires immediate response to ensure patient safety. Low-priority alarms, such as high or low respiratory rate, indicate a less urgent condition. Informational messages provide important information or instructions to the user.\n\nThe user can silence alarms for 2 minutes using the Alarm Silence button, and can manually reset most alarms once the underlying condition is corrected. Some alarms, like the Vent Inoperative alarm, cannot be silenced or reset.\n\nAlarm loudness can be adjusted through the Menu window. Alarms can also be hidden or displayed in the Alarms/Messages list, and autoreset alarms can be cleared from the list.\n\nDetailed tables are provided that list all the alarm and message types, their descriptions, the required corrective actions, and whether they are manually resettable, autoreset, or silenceable.",
        },
      ],
    },
    {
      id: 5,
      moduleName: "Care and Maintenance",
      estimatedTime: 60,
      totalTopics: 1,
      shortModuleDescription:
        "This module covers the care and maintenance required for the Respironics V60 Ventilator, including decontamination, preventive maintenance, and service/repair information.",
      ModuleContent: [
        {
          id: 1,
          title: "Care and Maintenance",
          titleDescription:
            "Procedures for decontamination, preventive maintenance, and service/repair of the Respironics V60 Ventilator.",
          image: "",
          content:
            "Decontamination procedures are provided for the ventilator exterior, touchscreen, and patient circuit/accessories. Approved cleaning agents are listed, and it is emphasized that the ventilator must not be sterilized or autoclaved.\n\nThe preventive maintenance schedule includes weekly, monthly, and annual tasks. Weekly tasks involve inspecting and cleaning the patient circuit, including the mask and main flow bacteria filter. Monthly tasks include inspecting and cleaning the cooling fan filter. Annually, the backup battery must be inspected and replaced if needed.\n\nSpecific instructions are provided for replacing the air inlet filter and cleaning or replacing the cooling fan filter. The backup battery can also be removed and replaced as needed.\n\nDisposal of the ventilator and its components, including those containing mercury, must be done in accordance with local, state, and federal regulations.\n\nStorage requirements for the ventilator are provided, and it is emphasized that the original packing material must be used when shipping the ventilator to prevent damage.\n\nRepair information is limited, as the user is instructed to contact Respironics for any technical service or repair needs not covered in the manual. However, it is stated that the user is responsible for complying with the information in the care and maintenance chapter.",
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
  ...assessmentData,
});

console.log("Document written with ID: ", docRef.id);
