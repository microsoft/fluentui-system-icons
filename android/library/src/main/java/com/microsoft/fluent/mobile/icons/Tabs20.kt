package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Tabs20: ImageVector
  get() {
    if (_tabs20 != null) {
      return _tabs20!!
    }
    _tabs20 = fluentIcon(name = "Filled.Tabs20", 20f) {
      materialPath {
          moveTo(2.0F, 8.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.892F, 0.0F, 1.693F, 0.39F, 2.243F, 1.007F)
          curveTo(13.163F, 3.002F, 13.08F, 3.0F, 13.0F, 3.0F)
          horizontalLineTo(8.0F)
          curveTo(5.239F, 3.0F, 3.0F, 5.239F, 3.0F, 8.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.081F, 0.002F, 0.162F, 0.007F, 0.243F)
          curveTo(2.39F, 12.693F, 2.0F, 11.892F, 2.0F, 11.0F)
          verticalLineTo(8.0F)
          close()
          moveToRelative(2.0F, 0.5F)
          curveTo(4.0F, 6.015F, 6.015F, 4.0F, 8.5F, 4.0F)
          horizontalLineTo(13.0F)
          curveToRelative(0.892F, 0.0F, 1.693F, 0.39F, 2.243F, 1.007F)
          curveTo(15.163F, 5.002F, 15.08F, 5.0F, 15.0F, 5.0F)
          horizontalLineTo(8.5F)
          curveTo(6.567F, 5.0F, 5.0F, 6.567F, 5.0F, 8.5F)
          verticalLineTo(15.0F)
          curveToRelative(0.0F, 0.081F, 0.002F, 0.162F, 0.007F, 0.243F)
          curveTo(4.39F, 14.693F, 4.0F, 13.892F, 4.0F, 13.0F)
          verticalLineTo(8.5F)
          close()
          moveTo(9.0F, 6.0F)
          curveTo(7.343F, 6.0F, 6.0F, 7.343F, 6.0F, 9.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(9.0F)
          close()        
      }
    }
    return _tabs20!!
  }

private var _tabs20: ImageVector? = null
