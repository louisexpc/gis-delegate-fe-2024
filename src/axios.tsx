import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "https://be.admin.gis-taiwan.ntu.edu.tw",
});
/*https://be.admin.gis-taiwan.ntu.edu.tw*/
interface IScheduleData {
  full_name: string;
  grouping: string;
  dietary_requirement: string;
  day1_lunch: string;
  day1_keynote: string;
  day2_keynote: string;
  day2_lunch: string;
  day2_mentor: string;
  day3_critical: string;
  day3_lunch: string;
  day4_lunch: string;
  day5_presentation: string;
  day5_exhibition: string;
  day5_lunch: string;
  round1: string;
  round2: string;
  round3: string;
  banquet: string;
  
}
/*
interface IScheduleData {
  dietary_requirement: string;
  day1_keynote: string;
  day1_lunch: string;
  day2_keynote: string;
  day2_lunch: string;
  day3_critical: string;
  day3_lunch: string;
  day4_lunch: string;
  day4_mentor: string;
  day5_lunch: string;
  day5_presentation: string;
  first_name: string;
  last_name: string;
  prefer_name: string;
  round1: string;
  round2: string;
  round3: string;
  grouping: string;
  banquet: string;
  day2_mentor: string;
}
CREATE TABLE schedule (
    id SERIAL PRIMARY KEY,
    gis_code VARCHAR(255) NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    grouping TEXT NOT NULL,
    dietary_requirement TEXT NOT NULL,
    day1_lunch TEXT NOT NULL,
    day1_keynote TEXT NOT NULL,
    day2_keynote TEXT NOT NULL,
    day2_lunch TEXT NOT NULL,
    day2_mentor TEXT NOT NULL,
    day3_critical TEXT NOT NULL,
    day3_lunch TEXT NOT NULL,
    day4_lunch TEXT NOT NULL,
    day5_presentation TEXT NOT NULL,
    day5_lunch TEXT NOT NULL,
    round1 TEXT NOT NULL,
    round2 TEXT NOT NULL,
    round3 TEXT NOT NULL,
    banquet TEXT NOT NULL,
);


*/
const verifyCode = async (giscode: string): Promise<boolean> => {
  try {
    await instance.get(`/verify/${giscode}`);
    return true;
  } catch (error) {
    return false;
  }
};

const fetchSchedule = async (giscode: string): Promise<IScheduleData> => {
  const response = await instance.get(`/schedule/${giscode}`);
  return response.data;
};

export { verifyCode, fetchSchedule, type IScheduleData };
