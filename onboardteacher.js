const express = require('express');
const router = express.Router();
const pool = require('./db'); // Import the database connection

// POST endpoint for onboarding a teacher
router.post('/onboard-teacher', async (req, res) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    gender,
    contactNumber,
    email,
    profilePicture,
    employeeId,
    designation,
    department,
    dateOfJoining,
    employmentType,
    highestQualification,
    specialization,
    universityName,
    yearOfGraduation,
    additionalCertifications,
    totalYearsOfExperience,
    previousSchools,
    subjectsTaught,
    workReference,
    resume,
    governmentId,
    educationalCertificates,
    experienceLetter,
    username,
    password,
    securityQuestion,
    securityAnswer,
    assignedClasses,
    accessLevel,
    emergencyContactName,
    emergencyContactRelation,
    emergencyContactNumber,
    emergencyContactAddress
  } = req.body;

  try {
    // Insert the teacher's details into the database
    const newTeacher = await pool.query(
      `INSERT INTO teachers (
        first_name, last_name, date_of_birth, gender, contact_number, email, profile_picture,
        employee_id, designation, department, date_of_joining, employment_type,
        highest_qualification, specialization, university_name, year_of_graduation,
        additional_certifications, total_years_of_experience, previous_schools, subjects_taught,
        work_reference, resume, government_id, educational_certificates, experience_letter,
        username, password, security_question, security_answer, assigned_classes, access_level,
        emergency_contact_name, emergency_contact_relation, emergency_contact_number, emergency_contact_address
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35) RETURNING *`,
      [
        firstName,
        lastName,
        dateOfBirth,
        gender,
        contactNumber,
        email,
        profilePicture,
        employeeId,
        designation,
        department,
        dateOfJoining,
        employmentType,
        highestQualification,
        specialization,
        universityName,
        yearOfGraduation,
        additionalCertifications,
        totalYearsOfExperience,
        previousSchools,
        subjectsTaught,
        workReference,
        resume,
        governmentId,
        educationalCertificates,
        experienceLetter,
        username,
        password,
        securityQuestion,
        securityAnswer,
        assignedClasses,
        accessLevel,
        emergencyContactName,
        emergencyContactRelation,
        emergencyContactNumber,
        emergencyContactAddress
      ]
    );

    res.status(201).json({ message: 'Teacher onboarded successfully', teacher: newTeacher.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET endpoint to fetch all onboarded teachers
router.get('/onboard-teacher', async (req, res) => {
  try {
    // Fetch all teachers from the database
    const allTeachers = await pool.query('SELECT * FROM teachers');

    res.status(200).json({ message: 'Teachers fetched successfully', teachers: allTeachers.rows });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});


// PUT endpoint to update a teacher's details
router.put('/onboard-teacher/:id', async (req, res) => {
  const { id } = req.params; // Get the teacher ID from the URL
  const {
    firstName,
    lastName,
    dateOfBirth,
    gender,
    contactNumber,
    email,
    profilePicture,
    employeeId,
    designation,
    department,
    dateOfJoining,
    employmentType,
    highestQualification,
    specialization,
    universityName,
    yearOfGraduation,
    additionalCertifications,
    totalYearsOfExperience,
    previousSchools,
    subjectsTaught,
    workReference,
    resume,
    governmentId,
    educationalCertificates,
    experienceLetter,
    username,
    password,
    securityQuestion,
    securityAnswer,
    assignedClasses,
    accessLevel,
    emergencyContactName,
    emergencyContactRelation,
    emergencyContactNumber,
    emergencyContactAddress
  } = req.body;

  try {
    // Update the teacher's details in the database
    const updatedTeacher = await pool.query(
      `UPDATE teachers SET
        first_name = $1,
        last_name = $2,
        date_of_birth = $3,
        gender = $4,
        contact_number = $5,
        email = $6,
        profile_picture = $7,
        employee_id = $8,
        designation = $9,
        department = $10,
        date_of_joining = $11,
        employment_type = $12,
        highest_qualification = $13,
        specialization = $14,
        university_name = $15,
        year_of_graduation = $16,
        additional_certifications = $17,
        total_years_of_experience = $18,
        previous_schools = $19,
        subjects_taught = $20,
        work_reference = $21,
        resume = $22,
        government_id = $23,
        educational_certificates = $24,
        experience_letter = $25,
        username = $26,
        password = $27,
        security_question = $28,
        security_answer = $29,
        assigned_classes = $30,
        access_level = $31,
        emergency_contact_name = $32,
        emergency_contact_relation = $33,
        emergency_contact_number = $34,
        emergency_contact_address = $35
      WHERE id = $36 RETURNING *`,
      [
        firstName,
        lastName,
        dateOfBirth,
        gender,
        contactNumber,
        email,
        profilePicture,
        employeeId,
        designation,
        department,
        dateOfJoining,
        employmentType,
        highestQualification,
        specialization,
        universityName,
        yearOfGraduation,
        additionalCertifications,
        totalYearsOfExperience,
        previousSchools,
        subjectsTaught,
        workReference,
        resume,
        governmentId,
        educationalCertificates,
        experienceLetter,
        username,
        password,
        securityQuestion,
        securityAnswer,
        assignedClasses,
        accessLevel,
        emergencyContactName,
        emergencyContactRelation,
        emergencyContactNumber,
        emergencyContactAddress,
        id
      ]
    );

    if (updatedTeacher.rows.length === 0) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    res.status(200).json({ message: 'Teacher updated successfully', teacher: updatedTeacher.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE endpoint to delete a teacher's record
router.delete('/onboard-teacher/:id', async (req, res) => {
  const { id } = req.params; // Get the teacher ID from the URL

  try {
    // Delete the teacher's record from the database
    const deletedTeacher = await pool.query('DELETE FROM teachers WHERE id = $1 RETURNING *', [id]);

    if (deletedTeacher.rows.length === 0) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    res.status(200).json({ message: 'Teacher deleted successfully', teacher: deletedTeacher.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; // Export the router