import os
import sys
# 当前路径
current_path = os.path.dirname(os.path.abspath(__file__)) + "/"

# 删除指定文件需要添加后缀名
# python xxx.py remove file_name.xx
# 匹配式删除，不添加后缀名
# python xxx.py remove filename


class remove_function(object):
    def __init__(self):
        """
        current_file: 当前路径下所有文件 list类型
        """
        self.args_list = []
        self.file_dict = {}
        self.open_result = True
        self.current_file = []

    # 获取命令行参数
    def get_shell_args(self) -> list:
        self.args_list = sys.argv
        return self.args_list

    def remove_file(self):
        args_list = self.get_shell_args()
        if "remove" in args_list[1]:
            count = 1
            self.current_file = os.listdir(current_path)
            for file_index in self.current_file:
                self.file_dict[count] = file_index
                count += 1
            print("当前路径文件:{}".format(self.file_dict))
            try:
                self.mate_delete(args_list[2])
            except Exception as ERO:
                print(ERO)
                print("参数错误")

    # 匹配删除
    def mate_delete(self, mate_countent: str):
        for file_index in self.current_file:
            if mate_countent in file_index:
                os.remove(current_path + file_index)
                print("{}删除成功".format(file_index))

    def close_main(self, **kwargs):
        if kwargs["open"] is False:
            self.open_result = False

    def __call__(self, *args, **kwargs):
        while self.open_result:
            try:
                self.remove_file()
            except Exception as ERO:
                print(ERO)
                raise ValueError("参数错误,示例:python xxx.py remove filename")
            finally:
                self.close_main(open=False)


@remove_function()
def test():
    pass









#
# dirList = os.listdir(folderName)
# newName = ""
# # 遍历输出所有文件名字
# for name in dirList:
#     print(name)
#     if "logway\AllLog" in name:
#         print("{}:True".format(name))
#         os.remove(folderName + name)

