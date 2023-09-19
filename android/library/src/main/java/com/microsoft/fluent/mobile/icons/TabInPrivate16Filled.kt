package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TabInPrivate16: ImageVector
  get() {
    if (_tabInPrivate16 != null) {
      return _tabInPrivate16!!
    }
    _tabInPrivate16 = fluentIcon(name = "Filled.TabInPrivate16", 16f) {
      materialPath {
          moveTo(4.0F, 2.0F)
          curveTo(2.895F, 2.0F, 2.0F, 2.895F, 2.0F, 4.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(4.0F)
          close()
          moveTo(3.5F, 4.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(1.793F)
          lineTo(3.5F, 5.793F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(0.0F, 3.207F)
          lineTo(7.207F, 3.5F)
          horizontalLineToRelative(2.586F)
          lineTo(3.5F, 9.793F)
          verticalLineTo(7.207F)
          close()
          moveTo(11.207F, 3.5F)
          horizontalLineTo(12.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(0.793F)
          lineTo(4.793F, 12.5F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineToRelative(-0.793F)
          lineTo(11.207F, 3.5F)
          close()
          moveTo(12.5F, 6.207F)
          verticalLineToRelative(2.586F)
          lineTo(8.793F, 12.5F)
          horizontalLineTo(6.207F)
          lineTo(12.5F, 6.207F)
          close()
          moveToRelative(0.0F, 4.0F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-1.793F)
          lineToRelative(2.293F, -2.293F)
          close()        
      }
    }
    return _tabInPrivate16!!
  }

private var _tabInPrivate16: ImageVector? = null
