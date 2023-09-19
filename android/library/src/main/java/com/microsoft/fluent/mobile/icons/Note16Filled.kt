package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Note16: ImageVector
  get() {
    if (_note16 != null) {
      return _note16!!
    }
    _note16 = fluentIcon(name = "Filled.Note16", 16f) {
      materialPath {
          moveTo(2.0F, 4.5F)
          curveTo(2.0F, 3.12F, 3.12F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.88F, 2.0F, 14.0F, 3.12F, 14.0F, 4.5F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(-3.5F)
          curveTo(9.12F, 8.0F, 8.0F, 9.12F, 8.0F, 10.5F)
          verticalLineTo(14.0F)
          horizontalLineTo(4.5F)
          curveTo(3.12F, 14.0F, 2.0F, 12.88F, 2.0F, 11.5F)
          verticalLineToRelative(-7.0F)
          close()
          moveToRelative(7.0F, 9.359F)
          curveToRelative(0.35F, -0.123F, 0.672F, -0.324F, 0.94F, -0.591F)
          lineToRelative(3.328F, -3.329F)
          curveTo(13.535F, 9.672F, 13.736F, 9.35F, 13.858F, 9.0F)
          horizontalLineTo(10.5F)
          curveTo(9.672F, 9.0F, 9.0F, 9.672F, 9.0F, 10.5F)
          verticalLineToRelative(3.359F)
          close()        
      }
    }
    return _note16!!
  }

private var _note16: ImageVector? = null
