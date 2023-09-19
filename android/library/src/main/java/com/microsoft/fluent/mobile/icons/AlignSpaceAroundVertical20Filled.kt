package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignSpaceAroundVertical20: ImageVector
  get() {
    if (_alignSpaceAroundVertical20 != null) {
      return _alignSpaceAroundVertical20!!
    }
    _alignSpaceAroundVertical20 = fluentIcon(name = "Filled.AlignSpaceAroundVertical20", 20f) {
      materialPath {
          moveTo(7.5F, 16.0F)
          curveTo(8.328F, 16.0F, 9.0F, 15.328F, 9.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          curveTo(9.0F, 4.672F, 8.328F, 4.0F, 7.5F, 4.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(4.672F, 4.0F, 4.0F, 4.672F, 4.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveTo(4.0F, 15.328F, 4.672F, 16.0F, 5.5F, 16.0F)
          horizontalLineToRelative(2.0F)
          close()
          moveToRelative(7.0F, 0.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-9.0F)
          curveTo(16.0F, 4.672F, 15.328F, 4.0F, 14.5F, 4.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(11.672F, 4.0F, 11.0F, 4.672F, 11.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(2.0F)
          close()        
      }
    }
    return _alignSpaceAroundVertical20!!
  }

private var _alignSpaceAroundVertical20: ImageVector? = null
