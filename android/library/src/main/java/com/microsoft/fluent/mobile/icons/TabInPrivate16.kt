package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TabInPrivate16: ImageVector
  get() {
    if (_tabInPrivate16 != null) {
      return _tabInPrivate16!!
    }
    _tabInPrivate16 = fluentIcon(name = "Regular.TabInPrivate16", 16f) {
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
          moveTo(3.0F, 4.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(2.293F)
          lineTo(3.0F, 6.293F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(0.0F, 3.707F)
          lineTo(7.707F, 3.0F)
          horizontalLineToRelative(2.586F)
          lineTo(3.0F, 10.293F)
          verticalLineTo(7.707F)
          close()
          moveTo(11.707F, 3.0F)
          horizontalLineTo(12.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(0.293F)
          lineTo(4.293F, 13.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineToRelative(-0.293F)
          lineTo(11.707F, 3.0F)
          close()
          moveTo(13.0F, 5.707F)
          verticalLineToRelative(2.586F)
          lineTo(8.293F, 13.0F)
          horizontalLineTo(5.707F)
          lineTo(13.0F, 5.707F)
          close()
          moveToRelative(0.0F, 4.0F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(9.707F)
          lineTo(13.0F, 9.707F)
          close()        
      }
    }
    return _tabInPrivate16!!
  }

private var _tabInPrivate16: ImageVector? = null
