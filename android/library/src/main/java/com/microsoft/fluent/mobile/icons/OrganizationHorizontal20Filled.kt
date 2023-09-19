package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.OrganizationHorizontal20: ImageVector
  get() {
    if (_organizationHorizontal20 != null) {
      return _organizationHorizontal20!!
    }
    _organizationHorizontal20 = fluentIcon(name = "Filled.OrganizationHorizontal20", 20f) {
      materialPath {
          moveTo(5.0F, 13.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          curveToRelative(0.0F, -1.658F, 1.343F, -3.001F, 3.0F, -3.001F)
          curveToRelative(1.487F, 0.0F, 2.722F, 1.081F, 2.96F, 2.5F)
          horizontalLineTo(9.5F)
          verticalLineToRelative(-3.0F)
          curveTo(9.5F, 5.671F, 10.172F, 5.0F, 11.0F, 5.0F)
          horizontalLineToRelative(1.041F)
          curveToRelative(0.238F, -1.42F, 1.473F, -2.501F, 2.96F, -2.501F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          curveToRelative(0.0F, 1.658F, -1.343F, 3.001F, -3.0F, 3.001F)
          curveToRelative(-1.487F, 0.0F, -2.721F, -1.08F, -2.96F, -2.5F)
          horizontalLineTo(11.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(1.041F)
          curveToRelative(0.238F, -1.42F, 1.473F, -2.501F, 2.96F, -2.501F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.344F, 3.0F, 3.0F)
          curveToRelative(0.0F, 1.658F, -1.343F, 3.001F, -3.0F, 3.001F)
          curveToRelative(-1.487F, 0.0F, -2.721F, -1.08F, -2.96F, -2.5F)
          horizontalLineTo(11.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.671F, -1.5F, -1.5F)
          verticalLineToRelative(-3.0F)
          horizontalLineTo(7.96F)
          curveTo(7.722F, 11.92F, 6.487F, 13.0F, 5.0F, 13.0F)
          close()        
      }
    }
    return _organizationHorizontal20!!
  }

private var _organizationHorizontal20: ImageVector? = null
