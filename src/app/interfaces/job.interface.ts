export interface JobInterface {
    jobId: string,
    job_title: string;
    description: string;
    job_type: string;
    categories: string;
    offered_sal: string;
    career_level: string;
    experience: string;
    gender: string;
    industry: string;
    qualification: string;
    dead_line: string;
    skills: Array<string>;
    country: string;
    city: string;
    address: string;
    lat: string;
    lon: string;
    userId: string;
    uid: string;
    created_date: string;
    status: string;
}
