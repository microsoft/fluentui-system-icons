package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PhotoFilter20: ImageVector
  get() {
    if (_photoFilter20 != null) {
      return _photoFilter20!!
    }
    _photoFilter20 = fluentIcon(name = "Filled.PhotoFilter20", 20f) {
      materialPath {
          moveTo(6.257F, 13.743F)
          curveTo(3.793F, 12.996F, 2.0F, 10.707F, 2.0F, 8.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          curveToRelative(2.707F, 0.0F, 4.996F, 1.793F, 5.743F, 4.257F)
          curveTo(16.207F, 7.004F, 18.0F, 9.293F, 18.0F, 12.0F)
          curveToRelative(0.0F, 3.314F, -2.686F, 6.0F, -6.0F, 6.0F)
          curveToRelative(-2.707F, 0.0F, -4.996F, -1.793F, -5.743F, -4.257F)
          close()
          moveTo(3.5F, 8.0F)
          curveToRelative(0.0F, 1.767F, 1.018F, 3.296F, 2.5F, 4.032F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          horizontalLineToRelative(0.032F)
          curveTo(11.296F, 4.518F, 9.767F, 3.5F, 8.0F, 3.5F)
          curveTo(5.515F, 3.5F, 3.5F, 5.515F, 3.5F, 8.0F)
          close()
          moveToRelative(4.468F, 6.0F)
          curveToRelative(0.736F, 1.482F, 2.265F, 2.5F, 4.032F, 2.5F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          curveToRelative(0.0F, -1.767F, -1.018F, -3.296F, -2.5F, -4.032F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, 3.314F, -2.686F, 6.0F, -6.0F, 6.0F)
          horizontalLineTo(7.968F)
          close()        
      }
    }
    return _photoFilter20!!
  }

private var _photoFilter20: ImageVector? = null
