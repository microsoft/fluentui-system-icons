package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignTop48: ImageVector
  get() {
    if (_alignTop48 != null) {
      return _alignTop48!!
    }
    _alignTop48 = fluentIcon(name = "Filled.AlignTop48", 48f) {
      materialPath {
          moveTo(5.25F, 6.5F)
          curveTo(4.56F, 6.5F, 4.0F, 7.06F, 4.0F, 7.75F)
          reflectiveCurveTo(4.56F, 9.0F, 5.25F, 9.0F)
          horizontalLineToRelative(37.5F)
          curveTo(43.44F, 9.0F, 44.0F, 8.44F, 44.0F, 7.75F)
          reflectiveCurveTo(43.44F, 6.5F, 42.75F, 6.5F)
          horizontalLineTo(5.25F)
          close()
          moveTo(26.0F, 15.75F)
          curveToRelative(0.0F, -2.347F, 1.903F, -4.25F, 4.25F, -4.25F)
          horizontalLineToRelative(5.5F)
          curveToRelative(2.347F, 0.0F, 4.25F, 1.903F, 4.25F, 4.25F)
          verticalLineToRelative(15.0F)
          curveToRelative(0.0F, 2.347F, -1.903F, 4.25F, -4.25F, 4.25F)
          horizontalLineToRelative(-5.5F)
          curveTo(27.903F, 35.0F, 26.0F, 33.097F, 26.0F, 30.75F)
          verticalLineToRelative(-15.0F)
          close()
          moveTo(12.25F, 11.5F)
          horizontalLineToRelative(5.5F)
          curveToRelative(2.347F, 0.0F, 4.25F, 1.903F, 4.25F, 4.25F)
          verticalLineTo(38.0F)
          curveToRelative(0.0F, 2.347F, -1.903F, 4.25F, -4.25F, 4.25F)
          horizontalLineToRelative(-5.5F)
          curveTo(9.903F, 42.25F, 8.0F, 40.347F, 8.0F, 38.0F)
          verticalLineTo(15.75F)
          curveToRelative(0.0F, -2.347F, 1.903F, -4.25F, 4.25F, -4.25F)
          close()        
      }
    }
    return _alignTop48!!
  }

private var _alignTop48: ImageVector? = null
