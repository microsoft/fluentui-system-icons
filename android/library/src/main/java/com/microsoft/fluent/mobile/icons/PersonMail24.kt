package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonMail24: ImageVector
  get() {
    if (_personMail24 != null) {
      return _personMail24!!
    }
    _personMail24 = fluentIcon(name = "Filled.PersonMail24", 24f) {
      materialPath {
          moveTo(11.0F, 15.5F)
          curveToRelative(0.0F, -0.563F, 0.186F, -1.082F, 0.5F, -1.5F)
          horizontalLineTo(5.253F)
          curveToRelative(-1.242F, 0.0F, -2.25F, 1.007F, -2.25F, 2.25F)
          verticalLineToRelative(0.919F)
          curveToRelative(0.0F, 0.572F, 0.18F, 1.13F, 0.511F, 1.596F)
          curveTo(5.056F, 20.929F, 7.58F, 22.0F, 11.0F, 22.0F)
          horizontalLineToRelative(0.05F)
          curveTo(11.018F, 21.838F, 11.0F, 21.67F, 11.0F, 21.5F)
          verticalLineToRelative(-6.0F)
          close()
          moveToRelative(0.0F, -13.495F)
          curveToRelative(2.762F, 0.0F, 5.0F, 2.239F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.238F, 5.0F, -5.0F, 5.0F)
          curveToRelative(-2.761F, 0.0F, -5.0F, -2.239F, -5.0F, -5.0F)
          reflectiveCurveToRelative(2.239F, -5.0F, 5.0F, -5.0F)
          close()
          moveToRelative(6.51F, 16.922F)
          lineToRelative(-5.49F, -3.203F)
          curveTo(12.153F, 14.75F, 12.99F, 14.0F, 14.0F, 14.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.095F, 0.0F, 1.985F, 0.88F, 2.0F, 1.97F)
          lineToRelative(-5.49F, 2.957F)
          close()
          moveToRelative(0.227F, 1.014F)
          lineToRelative(5.264F, -2.834F)
          verticalLineTo(21.0F)
          curveToRelative(0.0F, 1.105F, -0.896F, 2.0F, -2.0F, 2.0F)
          horizontalLineToRelative(-7.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineToRelative(-4.13F)
          lineToRelative(5.248F, 3.062F)
          curveToRelative(0.15F, 0.088F, 0.335F, 0.091F, 0.489F, 0.009F)
          close()        
      }
    }
    return _personMail24!!
  }

private var _personMail24: ImageVector? = null
