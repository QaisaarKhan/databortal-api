import { pool } from "../config/db.config";

export const getMethodByQuery = async (
  tableName,
  columns,
  whereClause,
  values
) => {
  try {
    let conn = await pool.getConnection();
    console.log(
      `tableName, columns, whereClause, values`,
      tableName,
      columns,
      whereClause,
      values
    );
    if (conn) {
      let query;
      if (whereClause === null || whereClause === "" || whereClause === " ")
        query = `SELECT ${columns} FROM ${tableName};`;
      else {
        query = `SELECT ${columns} FROM ${tableName} WHERE ${whereClause};`;
      }
      console.log(`query`, query);
      const [result, fields] = await conn.query(query, values);
      conn.release();
      console.log(`length`, result.length);
      return result.length > 0 ? result : {};
    }
  } catch (error) {
    return error;
  }
};

export const getMethodBySP = async (sp_name, values) => {
  let con = await pool.getConnection();
  console.log(sp_name, values);
  console.log(`CALL ${sp_name}(?,?)`, values);
  const [result, fields] = await con.query(`CALL ${sp_name}(?,?)`, values);
  con.release();
  console.log(result);
  return result.length > 0 ? result[0] : {};
};

export const getSingleMethodBySP = async (sp_name, values) => {
  let con = await pool.getConnection();
  console.log(sp_name, values);
  console.log(`CALL ${sp_name}(?,?)`, values);
  const [result, fields] = await con.query(`CALL ${sp_name}(?)`, values);
  con.release();
  console.log(result);
  return result.length > 0 ? result[0] : {};
};
