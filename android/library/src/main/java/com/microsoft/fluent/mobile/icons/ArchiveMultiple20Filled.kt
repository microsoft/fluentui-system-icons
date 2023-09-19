package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArchiveMultiple20: ImageVector
  get() {
    if (_archiveMultiple20 != null) {
      return _archiveMultiple20!!
    }
    _archiveMultiple20 = fluentIcon(name = "Filled.ArchiveMultiple20", 20f) {
      materialPath {
          moveTo(3.5F, 2.0F)
          curveTo(2.672F, 2.0F, 2.0F, 2.672F, 2.0F, 3.5F)
          verticalLineToRelative(1.0F)
          curveTo(2.0F, 5.328F, 2.672F, 6.0F, 3.5F, 6.0F)
          horizontalLineToRelative(11.0F)
          curveTo(15.328F, 6.0F, 16.0F, 5.328F, 16.0F, 4.5F)
          verticalLineToRelative(-1.0F)
          curveTo(16.0F, 2.672F, 15.328F, 2.0F, 14.5F, 2.0F)
          horizontalLineToRelative(-11.0F)
          close()
          moveTo(15.0F, 7.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(5.5F)
          curveTo(3.0F, 14.433F, 4.567F, 16.0F, 6.5F, 16.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineTo(7.0F)
          close()
          moveTo(7.0F, 8.5F)
          curveTo(7.0F, 8.224F, 7.224F, 8.0F, 7.5F, 8.0F)
          horizontalLineToRelative(3.0F)
          curveTo(10.776F, 8.0F, 11.0F, 8.224F, 11.0F, 8.5F)
          reflectiveCurveTo(10.776F, 9.0F, 10.5F, 9.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(7.224F, 9.0F, 7.0F, 8.776F, 7.0F, 8.5F)
          close()
          moveTo(8.5F, 18.0F)
          curveToRelative(-0.953F, 0.0F, -1.818F, -0.381F, -2.45F, -1.0F)
          horizontalLineToRelative(6.45F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineTo(7.085F)
          curveToRelative(0.583F, 0.206F, 1.0F, 0.762F, 1.0F, 1.415F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 2.485F, -2.014F, 4.5F, -4.5F, 4.5F)
          horizontalLineToRelative(-4.0F)
          close()        
      }
    }
    return _archiveMultiple20!!
  }

private var _archiveMultiple20: ImageVector? = null
