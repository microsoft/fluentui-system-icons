package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pen28: ImageVector
  get() {
    if (_pen28 != null) {
      return _pen28!!
    }
    _pen28 = fluentIcon(name = "Filled.Pen28", 28f) {
      materialPath {
          moveTo(19.289F, 3.15F)
          curveToRelative(1.535F, -1.536F, 4.025F, -1.536F, 5.56F, 0.0F)
          curveToRelative(1.536F, 1.535F, 1.536F, 4.025F, 0.0F, 5.56F)
          lineToRelative(-1.54F, 1.54F)
          curveToRelative(1.223F, 1.273F, 1.207F, 3.295F, -0.046F, 4.548F)
          lineTo(21.28F, 16.78F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(1.982F, -1.983F)
          curveToRelative(0.667F, -0.667F, 0.683F, -1.74F, 0.047F, -2.426F)
          lineTo(10.063F, 23.497F)
          curveToRelative(-0.44F, 0.44F, -0.987F, 0.76F, -1.587F, 0.928F)
          lineToRelative(-5.524F, 1.547F)
          curveToRelative(-0.26F, 0.073F, -0.54F, 0.0F, -0.732F, -0.192F)
          curveToRelative(-0.192F, -0.191F, -0.265F, -0.471F, -0.192F, -0.732F)
          lineToRelative(1.547F, -5.525F)
          curveToRelative(0.167F, -0.6F, 0.487F, -1.146F, 0.928F, -1.586F)
          lineTo(19.288F, 3.15F)
          close()        
      }
    }
    return _pen28!!
  }

private var _pen28: ImageVector? = null
