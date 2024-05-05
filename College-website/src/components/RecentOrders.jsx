import React from 'react';

const attendanceData = [
    {
        course: 'CIRCUIT ANALYSIS (EE122T)',
        section_code: 'CIRCUIT ANALYSIS',
        schedule: 'Spring 2024-2023F-BS-CE-EE122T-D-12945',
        scheduled: 33,
        conducted: 11,
        attended: 12,
        percentage: '109%',
        final_attendance: '107%',
        view: 'View'
    },
    {
        course: 'CIRCUIT ANALYSIS LAB (EE122L)',
        section_code: 'CIRCUIT ANALYSIS LAB',
        schedule: 'Spring 2024-2023F-BS-CE-EE122L-D-12949',
        scheduled: 17,
        conducted: 6,
        attended: 6,
        percentage: '100%',
        final_attendance: '100%',
        view: 'View'
    },
    {
        course: 'Electronic Devices and Circuit (EE125)',
        section_code: 'Electronic Devices and Circuit',
        schedule: 'Spring 2024-2023F-BS-CE-EE125-D-12978',
        scheduled: 32,
        conducted: 11,
        attended: 8,
        percentage: '73%',
        final_attendance: '80%',
        view: 'View'
    },
    // Add more attendance data objects here...
];

export default function AttendanceTimeTable() {
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Attendance Time Table</strong>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-gray-700">
                    <thead>
                        <tr>
                            <th>COURSE (CODE)</th>
                            <th>SECTION CODE</th>
                            <th>SCHEDULED</th>
                            <th>CONDUCTED</th>
                            <th>ATTENDED</th>
                            <th>PERCENTAGE</th>
                            <th>FINAL ATTENDANCE</th>
                            <th>VIEW</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendanceData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.course}</td>
                                <td>{item.section_code}</td>
                                <td>{item.scheduled}</td>
                                <td>{item.conducted}</td>
                                <td>{item.attended}</td>
                                <td>{item.percentage}</td>
                                <td>{item.final_attendance}</td>
                                <td>
                                    <button>{item.view}</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
