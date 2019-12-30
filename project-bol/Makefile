BUILD_DIR := build

SRCS := main.c foo/bar/baz.c util/log.c
OBJS := $(addprefix $(BUILD_DIR)/,$(patsubst %.c,%.o,$(SRCS)))

.PHONY: program
program: $(BUILD_DIR)/program

$(BUILD_DIR)/%.o: src/%.c
  mkdir -p $(@D)
  $(CC) -c $< -o $@

$(BUILD_DIR)/program: $(OBJS)
  mkdir -p $(@D)
  $(CC) $^ -o $@