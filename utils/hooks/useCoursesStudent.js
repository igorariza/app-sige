import { useState, useEffect } from 'react';

const useCoursesStudent = (API) => {
  const [coursesList, setCoursesList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    window.fetch(API)
      .then(res => res.json())
        .then(response => {
          setCoursesList(response)
          setLoading(false)
        });
  }, []);
  return {coursesList, loading};
}
export default useCoursesStudent;