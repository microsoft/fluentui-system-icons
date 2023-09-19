package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.EditOff32: ImageVector
  get() {
    if (_editOff32 != null) {
      return _editOff32!!
    }
    _editOff32 = fluentIcon(name = "Filled.EditOff32", 32f) {
      materialPath {
          moveTo(18.75F, 20.164F)
          lineToRelative(9.543F, 9.543F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(-26.0F, -26.0F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          lineToRelative(9.542F, 9.543F)
          lineToRelative(-7.478F, 7.479F)
          curveToRelative(-0.505F, 0.504F, -0.852F, 1.143F, -1.002F, 1.84F)
          lineTo(2.022F, 28.79F)
          curveToRelative(-0.07F, 0.332F, 0.031F, 0.677F, 0.27F, 0.917F)
          curveToRelative(0.24F, 0.24F, 0.586F, 0.342F, 0.917F, 0.27F)
          lineToRelative(6.22F, -1.332F)
          curveToRelative(0.698F, -0.15F, 1.338F, -0.498F, 1.842F, -1.002F)
          lineToRelative(7.479F, -7.48F)
          close()
          moveToRelative(7.5F, -7.5F)
          lineToRelative(-5.024F, 5.024F)
          lineToRelative(-6.915F, -6.914F)
          lineToRelative(5.024F, -5.025F)
          lineToRelative(6.914F, 6.914F)
          close()
          moveToRelative(-4.6F, -9.23F)
          curveToRelative(1.91F, -1.91F, 5.005F, -1.91F, 6.915F, 0.0F)
          curveToRelative(1.909F, 1.91F, 1.909F, 5.005F, 0.0F, 6.914F)
          lineToRelative(-0.902F, 0.901F)
          lineToRelative(-6.914F, -6.914F)
          lineToRelative(0.901F, -0.901F)
          close()        
      }
    }
    return _editOff32!!
  }

private var _editOff32: ImageVector? = null
