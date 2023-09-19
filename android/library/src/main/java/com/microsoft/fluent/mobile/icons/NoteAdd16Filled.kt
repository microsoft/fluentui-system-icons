package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.NoteAdd16: ImageVector
  get() {
    if (_noteAdd16 != null) {
      return _noteAdd16!!
    }
    _noteAdd16 = fluentIcon(name = "Filled.NoteAdd16", 16f) {
      materialPath {
          moveTo(10.0F, 5.5F)
          curveTo(10.0F, 7.985F, 7.985F, 10.0F, 5.5F, 10.0F)
          reflectiveCurveTo(1.0F, 7.985F, 1.0F, 5.5F)
          reflectiveCurveTo(3.015F, 1.0F, 5.5F, 1.0F)
          reflectiveCurveTo(10.0F, 3.015F, 10.0F, 5.5F)
          close()
          moveToRelative(-4.0F, -2.0F)
          curveTo(6.0F, 3.224F, 5.776F, 3.0F, 5.5F, 3.0F)
          reflectiveCurveTo(5.0F, 3.224F, 5.0F, 3.5F)
          verticalLineTo(5.0F)
          horizontalLineTo(3.5F)
          curveTo(3.224F, 5.0F, 3.0F, 5.224F, 3.0F, 5.5F)
          reflectiveCurveTo(3.224F, 6.0F, 3.5F, 6.0F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(1.5F)
          curveTo(5.0F, 7.776F, 5.224F, 8.0F, 5.5F, 8.0F)
          reflectiveCurveTo(6.0F, 7.776F, 6.0F, 7.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(1.5F)
          curveTo(7.776F, 6.0F, 8.0F, 5.776F, 8.0F, 5.5F)
          reflectiveCurveTo(7.776F, 5.0F, 7.5F, 5.0F)
          horizontalLineTo(6.0F)
          verticalLineTo(3.5F)
          close()
          moveTo(5.5F, 11.0F)
          curveTo(8.538F, 11.0F, 11.0F, 8.538F, 11.0F, 5.5F)
          curveToRelative(0.0F, -0.9F, -0.216F, -1.75F, -0.6F, -2.5F)
          horizontalLineToRelative(2.1F)
          curveTo(13.88F, 3.0F, 15.0F, 4.12F, 15.0F, 5.5F)
          verticalLineTo(9.0F)
          horizontalLineToRelative(-3.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, 1.343F, -3.0F, 3.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(5.5F)
          curveTo(4.12F, 15.0F, 3.0F, 13.88F, 3.0F, 12.5F)
          verticalLineToRelative(-2.1F)
          curveTo(3.75F, 10.784F, 4.6F, 11.0F, 5.5F, 11.0F)
          close()
          moveToRelative(4.5F, 3.985F)
          curveToRelative(0.319F, -0.046F, 0.616F, -0.194F, 0.846F, -0.424F)
          lineToRelative(3.715F, -3.715F)
          curveToRelative(0.23F, -0.23F, 0.378F, -0.527F, 0.424F, -0.846F)
          horizontalLineTo(12.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(2.985F)
          close()        
      }
    }
    return _noteAdd16!!
  }

private var _noteAdd16: ImageVector? = null
