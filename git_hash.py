'''import subprocess
process = subprocess.Popen(['git', 'rev-parse', 'HEAD'], shell=False, stdout=subprocess.PIPE)
git_head_hash = process.communicate()[0].strip()
print(git_head_hash)
'''

import subprocess
import re

leading_4_spaces = re.compile('^    ')


def get_commits():
    lines = subprocess.check_output(['git', 'log'], stderr=subprocess.STDOUT).decode("utf-8").split("\n")    
    commits = []
    current_commit = {}

    def save_current_commit():
        title = current_commit['message'][0]
        message = current_commit['message'][1:]
        if message and message[0] == '':
            del message[0]
        current_commit['title'] = title
        current_commit['message'] = '\n'.join(message)
        commits.append(current_commit)

    for line in lines:
        if not line.startswith(' '):
            if line.startswith('commit '):
                if current_commit:
                    save_current_commit()
                    current_commit = {}
                current_commit['hash'] = line.split('commit ')[1]
            else:
                try:
                    key, value = line.split(':', 1)
                    current_commit[key.lower()] = value.strip()
                except ValueError:
                    pass
        else:
            current_commit.setdefault(
                'message', []
            ).append(leading_4_spaces.sub('', line))
    if current_commit:
        save_current_commit()
    return commits

commits = get_commits()
commits.sort(key = lambda c: len(c['message']), reverse=True)
for commit in commits[:1]:
    print (commit['title'])
    print (commit['author'])
    print (commit['hash'])
    print ('https://github.com/chavan/new_repo_name/commit/' + commit['hash'])
    print ()