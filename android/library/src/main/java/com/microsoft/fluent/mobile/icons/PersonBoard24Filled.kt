package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonBoard24: ImageVector
  get() {
    if (_personBoard24 != null) {
      return _personBoard24!!
    }
    _personBoard24 = fluentIcon(name = "Filled.PersonBoard24", 24f) {
      materialPath {
          moveTo(6.25F, 3.0F)
          curveTo(4.455F, 3.0F, 3.0F, 4.455F, 3.0F, 6.25F)
          verticalLineToRelative(8.5F)
          curveTo(3.0F, 16.545F, 4.455F, 18.0F, 6.25F, 18.0F)
          horizontalLineToRelative(8.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineToRelative(-8.5F)
          curveTo(18.0F, 4.455F, 16.545F, 3.0F, 14.75F, 3.0F)
          horizontalLineToRelative(-8.5F)
          close()
          moveToRelative(6.5F, 4.5F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          reflectiveCurveTo(8.25F, 8.743F, 8.25F, 7.5F)
          reflectiveCurveToRelative(1.007F, -2.25F, 2.25F, -2.25F)
          reflectiveCurveToRelative(2.25F, 1.007F, 2.25F, 2.25F)
          close()
          moveToRelative(0.75F, 3.25F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineToRelative(0.5F)
          curveToRelative(0.0F, 0.496F, -0.086F, 0.86F, -0.254F, 1.16F)
          curveToRelative(-0.168F, 0.303F, -0.43F, 0.562F, -0.818F, 0.83F)
          curveToRelative(-0.733F, 0.503F, -1.858F, 0.76F, -3.428F, 0.76F)
          curveToRelative(-1.32F, 0.0F, -2.445F, -0.257F, -3.24F, -0.76F)
          curveToRelative(-0.418F, -0.266F, -0.73F, -0.524F, -0.938F, -0.83F)
          curveTo(6.117F, 13.61F, 6.0F, 13.246F, 6.0F, 12.75F)
          verticalLineToRelative(-0.5F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          horizontalLineToRelative(6.0F)
          close()
          moveTo(6.01F, 19.0F)
          curveToRelative(0.578F, 0.902F, 1.59F, 1.5F, 2.74F, 1.5F)
          horizontalLineToRelative(6.5F)
          curveToRelative(2.9F, 0.0F, 5.25F, -2.35F, 5.25F, -5.25F)
          verticalLineToRelative(-6.5F)
          curveToRelative(0.0F, -1.15F, -0.598F, -2.162F, -1.5F, -2.74F)
          verticalLineToRelative(9.24F)
          curveToRelative(0.0F, 2.071F, -1.679F, 3.75F, -3.75F, 3.75F)
          horizontalLineTo(6.01F)
          close()        
      }
    }
    return _personBoard24!!
  }

private var _personBoard24: ImageVector? = null
