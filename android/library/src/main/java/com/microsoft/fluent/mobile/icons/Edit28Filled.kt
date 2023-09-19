package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Edit28: ImageVector
  get() {
    if (_edit28 != null) {
      return _edit28!!
    }
    _edit28 = fluentIcon(name = "Filled.Edit28", 28f) {
      materialPath {
          moveTo(19.289F, 3.15F)
          curveToRelative(1.535F, -1.536F, 4.025F, -1.536F, 5.56F, 0.0F)
          curveToRelative(1.536F, 1.535F, 1.536F, 4.025F, 0.0F, 5.56F)
          lineToRelative(-1.54F, 1.54F)
          lineToRelative(-5.56F, -5.56F)
          lineToRelative(1.54F, -1.54F)
          close()
          moveToRelative(-2.6F, 2.6F)
          lineTo(4.502F, 17.937F)
          curveToRelative(-0.44F, 0.44F, -0.76F, 0.986F, -0.928F, 1.586F)
          lineToRelative(-1.547F, 5.525F)
          curveToRelative(-0.073F, 0.26F, 0.0F, 0.54F, 0.192F, 0.732F)
          curveToRelative(0.191F, 0.192F, 0.471F, 0.265F, 0.732F, 0.192F)
          lineToRelative(5.524F, -1.547F)
          curveToRelative(0.6F, -0.168F, 1.147F, -0.487F, 1.587F, -0.928F)
          lineTo(22.25F, 11.311F)
          lineToRelative(-5.56F, -5.56F)
          close()        
      }
    }
    return _edit28!!
  }

private var _edit28: ImageVector? = null
