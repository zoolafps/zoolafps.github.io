<?php 
class Model{
    public $db;
    function __construct(){
        $this->db = new Database();
    }

    public function getAll($table){
        $result = [];

        try {
            $query = $this->db->connect()->query("SELECT * FROM $table");
            while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
                array_push($result, $row);
            }
            return $result;
        } catch (PDOException $e) {
            return [];
        }
    }

    public function get($table, $param){
        $result = [];

        $query = $this->db->connect()->prepare("SELECT * FROM $table WHERE id = :id");
        try {
            $query->execute(['id' => $param]);
            while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
                array_push($result, $row);
            }
            return $result;
        } catch (PDOException $e) {
            return [];
        }

    }

    public function delete($table, $param){
        $result = [];
        $query = "DELETE FROM $table WHERE 'id'=$param ";
        $result = $this->db->query($query);
        return $result;
    }

    public function edit($table, $data, $param){
        $result = [];
        $query = "UPDATE $table SET `id`='[value-1]',`title`='[value-2]',`cover`='[value-3]',`description`='[value-4]',`main_content`='[value-5]',`creation_date`='[value-6]' WHERE $param ";
        $result = $this->db->query($query);
        return $result;
    }

    public function create($table, $data){
        $result = [];
        $query = "INSERT INTO $table VALUES ('null','null','null','null',$data,'null')";
        $result = $this->db->query($query);
        return $result;
    }
}
?>