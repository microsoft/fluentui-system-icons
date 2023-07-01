package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pen32: ImageVector
  get() {
    if (_pen32 != null) {
      return _pen32!!
    }
    _pen32 = fluentIcon(name = "Filled.Pen32", 32f) {
      materialPath {
          moveTo(21.65F, 3.434F)
          curveToRelative(1.91F, -1.91F, 5.005F, -1.91F, 6.915F, 0.0F)
          curveToRelative(1.909F, 1.91F, 1.909F, 5.005F, 0.0F, 6.914F)
          lineToRelative(-0.901F, 0.901F)
          lineToRelative(0.275F, 0.276F)
          curveToRelative(1.367F, 1.367F, 1.367F, 3.583F, 0.0F, 4.95F)
          lineToRelative(-2.232F, 2.232F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(2.232F, -2.232F)
          curveToRelative(0.586F, -0.586F, 0.586F, -1.536F, 0.0F, -2.122F)
          lineToRelative(-0.276F, -0.276F)
          lineToRelative(-14.978F, 14.98F)
          curveToRelative(-0.504F, 0.504F, -1.144F, 0.852F, -1.841F, 1.002F)
          lineToRelative(-6.22F, 1.333F)
          curveToRelative(-0.332F, 0.07F, -0.677F, -0.031F, -0.917F, -0.271F)
          curveToRelative(-0.24F, -0.24F, -0.342F, -0.585F, -0.27F, -0.917F)
          lineToRelative(1.332F, -6.22F)
          curveToRelative(0.15F, -0.698F, 0.497F, -1.337F, 1.002F, -1.841F)
          lineTo(21.65F, 3.434F)
          close()        
      }
    }
    return _pen32!!
  }

private var _pen32: ImageVector? = null
