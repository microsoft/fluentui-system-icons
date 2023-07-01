package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignLeft48: ImageVector
  get() {
    if (_alignLeft48 != null) {
      return _alignLeft48!!
    }
    _alignLeft48 = fluentIcon(name = "Filled.AlignLeft48", 48f) {
      materialPath {
          moveTo(6.5F, 5.25F)
          curveTo(6.5F, 4.56F, 7.06F, 4.0F, 7.75F, 4.0F)
          reflectiveCurveTo(9.0F, 4.56F, 9.0F, 5.25F)
          verticalLineToRelative(37.5F)
          curveTo(9.0F, 43.44F, 8.44F, 44.0F, 7.75F, 44.0F)
          reflectiveCurveTo(6.5F, 43.44F, 6.5F, 42.75F)
          verticalLineTo(5.25F)
          close()
          moveTo(15.75F, 26.0F)
          curveToRelative(-2.347F, 0.0F, -4.25F, 1.903F, -4.25F, 4.25F)
          verticalLineToRelative(5.5F)
          curveToRelative(0.0F, 2.347F, 1.903F, 4.25F, 4.25F, 4.25F)
          horizontalLineToRelative(15.0F)
          curveToRelative(2.347F, 0.0F, 4.25F, -1.903F, 4.25F, -4.25F)
          verticalLineToRelative(-5.5F)
          curveToRelative(0.0F, -2.347F, -1.903F, -4.25F, -4.25F, -4.25F)
          horizontalLineToRelative(-15.0F)
          close()
          moveTo(11.5F, 12.25F)
          verticalLineToRelative(5.5F)
          curveToRelative(0.0F, 2.347F, 1.903F, 4.25F, 4.25F, 4.25F)
          horizontalLineTo(38.0F)
          curveToRelative(2.347F, 0.0F, 4.25F, -1.903F, 4.25F, -4.25F)
          verticalLineToRelative(-5.5F)
          curveTo(42.25F, 9.903F, 40.347F, 8.0F, 38.0F, 8.0F)
          horizontalLineTo(15.75F)
          curveToRelative(-2.347F, 0.0F, -4.25F, 1.903F, -4.25F, 4.25F)
          close()        
      }
    }
    return _alignLeft48!!
  }

private var _alignLeft48: ImageVector? = null
