package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignLeft28: ImageVector
  get() {
    if (_alignLeft28 != null) {
      return _alignLeft28!!
    }
    _alignLeft28 = fluentIcon(name = "Filled.AlignLeft28", 28f) {
      materialPath {
          moveTo(3.0F, 2.75F)
          curveTo(3.0F, 2.336F, 3.336F, 2.0F, 3.75F, 2.0F)
          reflectiveCurveTo(4.5F, 2.336F, 4.5F, 2.75F)
          verticalLineToRelative(22.5F)
          curveTo(4.5F, 25.664F, 4.164F, 26.0F, 3.75F, 26.0F)
          reflectiveCurveTo(3.0F, 25.664F, 3.0F, 25.25F)
          verticalLineTo(2.75F)
          close()
          moveTo(8.75F, 5.0F)
          curveTo(7.231F, 5.0F, 6.0F, 6.231F, 6.0F, 7.75F)
          verticalLineToRelative(2.5F)
          curveTo(6.0F, 11.769F, 7.231F, 13.0F, 8.75F, 13.0F)
          horizontalLineToRelative(13.5F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          verticalLineToRelative(-2.5F)
          curveTo(25.0F, 6.231F, 23.769F, 5.0F, 22.25F, 5.0F)
          horizontalLineTo(8.75F)
          close()
          moveToRelative(0.0F, 10.0F)
          curveTo(7.231F, 15.0F, 6.0F, 16.231F, 6.0F, 17.75F)
          verticalLineToRelative(2.5F)
          curveTo(6.0F, 21.769F, 7.231F, 23.0F, 8.75F, 23.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          verticalLineToRelative(-2.5F)
          curveToRelative(0.0F, -1.519F, -1.231F, -2.75F, -2.75F, -2.75F)
          horizontalLineToRelative(-8.0F)
          close()        
      }
    }
    return _alignLeft28!!
  }

private var _alignLeft28: ImageVector? = null
